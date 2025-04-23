import empresa from "@dbEmpresaSchema/index";
import equal, { EqualInterface } from "@dbFilterConditionalOperators/equal";
import { WhereClause } from "@dbQueryBuilder/empresa/where/operators/types";
import operators from "@dbUtils/empresa/queryBuilder/operators/where";
import isValid, { IsValidInterface } from "@dbUtils/empresa/queryBuilder/validValue";
import { OperatorsConst } from "@dbUtils/empresa/queryBuilder/where/types";
import { SQL } from "drizzle-orm";
interface ApplyWhereInterface {
    apply([column, operator, value]: WhereClause): SQL
}
class ApplyWhere implements ApplyWhereInterface {
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
        this.apply = this.apply.bind(this);
    }
    public apply([column, operator, value]: WhereClause): SQL {
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
    ApplyWhereInterface
};
export default new ApplyWhere(equal, isValid, operators)