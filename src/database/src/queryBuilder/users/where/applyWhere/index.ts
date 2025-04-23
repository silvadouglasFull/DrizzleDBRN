import { WhereClause } from "@db/queryBuilder/users/where/operators/types";
import isVaid, { IsValidInterface } from "@db/utils/users/queryBuilder/validValue";
import equal, { EqualInterface } from "@dbOperators/equal";
import greaterThan, { GreaterThanInterface } from "@dbOperators/greaterThan";
import greaterThanOrEqualto, { GreaterThanOrEqualToInterface } from "@dbOperators/greaterThanOrEqualto";
import lessThan, { LessThanOperatorInterface } from "@dbOperators/lessThan";
import notEqual, { NotEqualInterface } from "@dbOperators/notEqual";
import user from "@dbUsersSchema/index";
import operators from "@dbUtils/users/queryBuilder/operators/where";
import { OperatorsConst } from "@dbUtils/users/queryBuilder/operators/where/types";
import { SQL } from "drizzle-orm";

interface ApplyWhereInterface {
    apply([column, operator, value]: WhereClause): SQL
}
class ApplyWhere implements ApplyWhereInterface {
    constructor(
        private equal: EqualInterface,
        private notEqual: NotEqualInterface,
        private greaterThan: GreaterThanInterface,
        private greaterThanOrEqualto: GreaterThanOrEqualToInterface,
        private lessThan: LessThanOperatorInterface,
        private isValid: IsValidInterface,
        private operator: OperatorsConst) {
        this.operator.push(
            {
                action: this.equal.eq,
                operator: '=',
            },
            {
                action: this.notEqual.ne,
                operator: '<>',
            },
            {
                action: this.greaterThan.gt,
                operator: '>'
            },
            {
                action: this.greaterThanOrEqualto.gte,
                operator: '>='
            },
            {
                action: this.lessThan.lt,
                operator: '<'
            }
        )
        this.apply = this.apply.bind(this);
    }
    apply([column, operator, value]: WhereClause): SQL {
        const operatorFn = this.operator.find(op => op.operator === operator)?.action;
        if (!operatorFn) {
            throw new Error(`Operador não suportado: ${operator}`);
        }
        if (!this.isValid.isValid(value)) {
            throw new Error(`O valor ${value} da coluna ${column} não é valido`);
        }
        return operatorFn(user[column], value ?? '');
    }
}
export {
    ApplyWhereInterface
};
export default new ApplyWhere(equal,
    notEqual,
    greaterThan,
    greaterThanOrEqualto,
    lessThan,
    isVaid,
    operators)