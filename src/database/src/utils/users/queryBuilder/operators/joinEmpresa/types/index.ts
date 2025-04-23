import { EqualOperatorType } from "@dbFilterConditionalOperators/equal/types";
import { Operator } from "@dbQueryBuilder/users/where/operators/types";
import operators from "@dbUtils/users/queryBuilder/operators/joinEmpresa";
type OperatorsConst = typeof operators
type Operators = Array<{
    operator: Operator,
    action: EqualOperatorType | undefined
}>
export {
    OperatorsConst
};
export default Operators