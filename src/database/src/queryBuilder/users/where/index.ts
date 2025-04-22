import operators from "@db/utils/users/queryBuilder/operators";
import { OperatorsConst } from "@db/utils/users/queryBuilder/operators/types";
import isVaid, { IsValidInterface } from "@db/utils/users/queryBuilder/validValue";
import equal, { EqualInterface } from "@dbOperators/equal";
import greaterThan, { GreaterThanInterface } from "@dbOperators/greaterThan";
import greaterThanOrEqualto, { GreaterThanOrEqualToInterface } from "@dbOperators/greaterThanOrEqualto";
import lessThan, { LessThanOperatorInterface } from "@dbOperators/lessThan";
import notEqual, { NotEqualInterface } from "@dbOperators/notEqual";
import { WhereClause, Wheres } from "@dbQueryBuilder/users/operators/types";
import user from "@dbUsersSchema/index";

interface WhereQueryBuilderInterface {
    where(rops: Wheres | Wheres[]): any;
}
class Where implements WhereQueryBuilderInterface {
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
    }
    public where(clauses: Wheres): any {
        if (Array.isArray(clauses[0])) {
            return (clauses as Array<WhereClause>).map(([column, operator, value]) => {
                const operatorFn = this.operator.find(op => op.operator === operator)?.action;
                if (!operatorFn) {
                    throw new Error(`Operador não suportado: ${operator}`);
                }
                if (!this.isValid.isValid(value)) {
                    throw new Error(`O valor ${value} da coluna ${column} não é valido`);
                }
                return operatorFn(user[column], value ?? '');
            });
        }
        const [column, operator, value] = clauses as WhereClause;
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
    WhereQueryBuilderInterface
};
export default new Where(
    equal,
    notEqual,
    greaterThan,
    greaterThanOrEqualto,
    lessThan,
    isVaid,
    operators)
