import lessThan from "@dbFilterConditionalOperators/lessThan";
import { lt } from "drizzle-orm";
type LessThanOperatorType = typeof lt
type LessThanOperator = typeof lessThan
export {
    LessThanOperatorType
};
export default LessThanOperator