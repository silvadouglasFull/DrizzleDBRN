import user from "@db/schemas/users";
import equal, { EqualInterface } from "@dbOperators/equal";
import notEqual, { NotEqualInterface } from "@dbOperators/notEqual";
import { WhereClause, Wheres } from "@dbQueryBuilder/operators/types";
import operators from "@dbUtils/queryBuilder/operators";
import { OperatorsConst } from "@dbUtils/queryBuilder/operators/types";
import isVaid, { IsValidInterface } from "@dbUtils/queryBuilder/validValue";

interface WhereQueryBuilder {
    where(rops: Wheres | Wheres[]): any;
}
class Where implements WhereQueryBuilder {
    constructor(private equal: EqualInterface, private notEqual: NotEqualInterface, private isValid: IsValidInterface, private operator: OperatorsConst) {
        this.operator.push({
            action: this.equal.eq,
            operator: '=',
        }, {
            action: this.notEqual.ne,
            operator: '<>',
        })
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
export default new Where(equal, notEqual, isVaid, operators)
