import { EqualOperatorType } from "@dbOperators/equal/types";
import { NotEqualOperatorType } from "@dbOperators/notEqual/types";
import { Operator } from "@dbQueryBuilder/operators/types";
import operators from "..";
type OperatorsConst = typeof operators
type Operators = Array<{
    operator: Operator,
    action: EqualOperatorType | NotEqualOperatorType | undefined
}>
export {
    OperatorsConst
};
export default Operators