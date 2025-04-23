import empresa from "@db/schemas/empresa/index"
import equal, { EqualInterface } from "@dbOperators/equal"
import Joins, { JoinClause } from "@dbQueryBuilder/users/join/joinEmpresa//operators/types"
import user from "@dbUsersSchema/index"
import isValid, { IsValidInterface } from "@dbUtils/users/queryBuilder/joinEmpresa/validValue"
import operators from "@dbUtils/users/queryBuilder/operators/joinEmpresa"
import { OperatorsConst } from "@dbUtils/users/queryBuilder/operators/joinEmpresa/types"
interface JoinQueryBuilderInterface {
    join(joins: Joins): any
}
class JoinQueryBuilder implements JoinQueryBuilderInterface {
    constructor(private equal: EqualInterface, private operator: OperatorsConst, private isValid: IsValidInterface) {
        this.operator.push({
            action: this.equal.eq,
            operator: '='
        })
    }
    join(joins: Joins): any {
        if (Array.isArray(joins[0])) {
            return (joins as Array<JoinClause>).map(([leftColumn, operator, rightColumn]) => {
                const operatorFn = this.operator.find(op => op.operator === operator)?.action;
                if (!operatorFn) {
                    throw new Error(`Operador não suportado: ${operator}`);
                }
                if ((!this.isValid.isValid(user.$inferInsert[leftColumn])) || (!this.isValid.isValid(empresa.$inferSelect[rightColumn]))) {
                    throw new Error(`Join informado incorretamente`);
                }
                return operatorFn(user[leftColumn], empresa[rightColumn]);
            });
        }
        const [leftColumn, operator, rightColumn] = joins as JoinClause;
        const operatorFn = this.operator.find(op => op.operator === operator)?.action;
        if (!operatorFn) {
            throw new Error(`Operador não suportado: ${operator}`);
        }
        if ((!this.isValid.isValid(user.$inferInsert[leftColumn])) || (!this.isValid.isValid(empresa.$inferSelect[rightColumn]))) {
            throw new Error(`Join informado incorretamente`);
        }
        return operatorFn(user[leftColumn], empresa[rightColumn]);
    }
}
export default new JoinQueryBuilder(equal, operators, isValid)