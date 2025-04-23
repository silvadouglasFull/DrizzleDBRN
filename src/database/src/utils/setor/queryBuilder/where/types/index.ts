import { Operator } from "@db/queryBuilder/users/where/operators/types";
import { EqualOperatorType } from "@dbFilterConditionalOperators/equal/types";
import { GreaterThanOperatorType } from "@dbFilterConditionalOperators/greaterThan/types";
import { GreaterThanOrEqualtoOperatorType } from "@dbFilterConditionalOperators/greaterThanOrEqualto/types";
import { LessThanOperatorType } from "@dbFilterConditionalOperators/lessThan/types";
import { NotEqualOperatorType } from "@dbFilterConditionalOperators/notEqual/types";
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