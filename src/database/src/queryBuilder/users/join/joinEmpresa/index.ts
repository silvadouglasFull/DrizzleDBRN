import equal, { EqualInterface } from "@dbOperators/equal"
import Joins, { JoinClause } from "@dbQueryBuilder/users/join/joinEmpresa//operators/types"
import user from "@dbUsersSchema/index"
import isValid, { IsValidInterface } from "@dbUtils/users/queryBuilder/joinEmpresa/validValue"
import operators from "@dbUtils/users/queryBuilder/operators"
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
            return (joins as Array<JoinClause>).map(([column, operator, value]) => {
                const operatorFn = this.operator.find(op => op.operator === operator)?.action;
                if (!operatorFn) {
                    throw new Error(`Operador não suportado: ${operator}`);
                }
                if (!this.isValid.isValid(Number(value))) {
                    throw new Error(`O valor ${value} da coluna ${column} não é valido`);
                }
                return operatorFn(user[column], Number(value) ?? 0);
            });
        }
        const [column, operator, value] = joins as JoinClause;
        const operatorFn = this.operator.find(op => op.operator === operator)?.action;
        if (!operatorFn) {
            throw new Error(`Operador não suportado: ${operator}`);
        }
        if (!this.isValid.isValid(Number(value))) {
            throw new Error(`O valor ${value} da coluna ${column} não é valido`);
        }
        return operatorFn(user[column], Number(value) ?? 0);
    }
}
export default new JoinQueryBuilder(equal, operators, isValid)