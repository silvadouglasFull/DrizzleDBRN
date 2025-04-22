import empresa from "@dbEmpresaSchema/index";
import equal, { EqualInterface } from "@dbOperators/equal";
import { WhereClause, Wheres } from "@dbQueryBuilder/empresa/operators/types";
import operators from "@dbUtils/queryBuilder/operators";
import { OperatorsConst } from "@dbUtils/queryBuilder/operators/types";
import isVaid, { IsValidInterface } from "@dbUtils/queryBuilder/validValue";

interface WhereQueryBuilderInterface {
    where(rops: Wheres | Wheres[]): any;
}
class Where implements WhereQueryBuilderInterface {
    constructor(
        private equal: EqualInterface,
        private isValid: IsValidInterface,
        private operator: OperatorsConst) {
        this.operator.push(
            {
                action: this.equal.eq,
                operator: '=',
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
                return operatorFn(empresa[column], value ?? '');
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
        return operatorFn(empresa[column], value ?? '');
    }

}
export {
    WhereQueryBuilderInterface
};
export default new Where(
    equal,
    isVaid,
    operators
)
