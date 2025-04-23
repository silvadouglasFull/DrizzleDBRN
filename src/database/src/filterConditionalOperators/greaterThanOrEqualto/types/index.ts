import greaterThanOrEqualto from "@dbFilterConditionalOperators/greaterThanOrEqualto";
import { gte } from "drizzle-orm";
type GreaterThanOrEqualtoOperatorType = typeof gte
type GreaterThanOrEqualto = typeof greaterThanOrEqualto
export {
    GreaterThanOrEqualtoOperatorType
};
export default GreaterThanOrEqualto