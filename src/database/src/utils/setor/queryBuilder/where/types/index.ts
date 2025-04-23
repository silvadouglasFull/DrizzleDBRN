import { EqualOperatorType } from "@db/filterConditionalOperators/equal/types";
import { GreaterThanOperatorType } from "@db/filterConditionalOperators/greaterThan/types";
import { GreaterThanOrEqualtoOperatorType } from "@db/filterConditionalOperators/greaterThanOrEqualto/types";
import { LessThanOperatorType } from "@db/filterConditionalOperators/lessThan/types";
import { NotEqualOperatorType } from "@db/filterConditionalOperators/notEqual/types";
import { Operator } from "@db/queryBuilder/users/where/operators/types";
import operators from "@dbUtils/users/queryBuilder/operators/where";
type OperatorsConst = typeof operators
type Operators = Array<{
    operator: Operator,
    action: EqualOperatorType | NotEqualOperatorType | GreaterThanOperatorType |
    GreaterThanOrEqualtoOperatorType | LessThanOperatorType | undefined
}>
export {
    OperatorsConst
};
export default Operators