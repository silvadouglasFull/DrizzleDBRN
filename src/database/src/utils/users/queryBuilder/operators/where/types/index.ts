import { EqualOperatorType } from "@dbOperators/equal/types";
import { GreaterThanOperatorType } from "@dbOperators/greaterThan/types";
import { GreaterThanOrEqualtoOperatorType } from "@dbOperators/greaterThanOrEqualto/types";
import { LessThanOperatorType } from "@dbOperators/lessThan/types";
import { NotEqualOperatorType } from "@dbOperators/notEqual/types";
import { Operator } from "@dbQueryBuilder/users/where/operators/types";
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