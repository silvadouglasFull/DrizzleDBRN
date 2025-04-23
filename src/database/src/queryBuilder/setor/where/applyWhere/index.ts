import equal, { EqualInterface } from "@db/filterConditionalOperators/equal";
import { WhereClause } from "@db/queryBuilder/setor/where/operators/types";
import setor from "@dbSetorSchema/index";
import isVaid, { IsValidInterface } from "@dbUtils/setor/queryBuilder/validValue";
import operators from "@dbUtils/setor/queryBuilder/where";
import { OperatorsConst } from "@dbUtils/setor/queryBuilder/where/types";
import { SQL } from "drizzle-orm";

interface ApplyWhereInterface {
    apply(rops: WhereClause): SQL;
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
        return operatorFn(setor[column], value ?? '');
    }

}
export {
    ApplyWhereInterface
};
export default new ApplyWhere(
    equal,
    isVaid,
    operators
)
