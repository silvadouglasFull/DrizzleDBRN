import empresa from "@dbEmpresaSchema/index"
import equal, { EqualInterface } from "@dbOperators/equal"
import { JoinClause } from "@dbQueryBuilder/users/join/joinEmpresa//operators/types"
import user from "@dbUsersSchema/index"
import isValid, { IsValidInterface } from "@dbUtils/users/queryBuilder/joinEmpresa/validValue"
import operators from "@dbUtils/users/queryBuilder/operators/joinEmpresa"
import { OperatorsConst } from "@dbUtils/users/queryBuilder/operators/joinEmpresa/types"
import { SQL } from "drizzle-orm"

interface ApplyJoinInterface {
    apply([leftColumn, operator, rightColumn]: JoinClause): SQL
}
class ApplyJoin implements ApplyJoinInterface {
    constructor(
        private equal: EqualInterface,
        private operator: OperatorsConst,
        private isValid: IsValidInterface
    ) {
        this.operator.push({
            action: this.equal.eq,
            operator: '='
        })
        this.apply = this.apply.bind(this);
    }
    apply([leftColumn, operator, rightColumn]: JoinClause): SQL {
        const operatorFn = this.operator.find(op => op.operator === operator)?.action;
        if (!operatorFn) {
            throw new Error(`Operador não suportado: ${operator}`);
        }

        const leftValue = user.$inferInsert[leftColumn];
        const rightValue = empresa.$inferSelect[rightColumn];

        if (!this.isValid.isValid(leftValue) || !this.isValid.isValid(rightValue)) {
            throw new Error(`Join informado incorretamente`);
        }

        return operatorFn(user[leftColumn], empresa[rightColumn]);
    }
}
export {
    ApplyJoinInterface
}
export default new ApplyJoin(equal, operators, isValid)