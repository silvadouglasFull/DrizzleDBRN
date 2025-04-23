import greaterThan from "@dbFilterConditionalOperators/greaterThan";
import { gt } from "drizzle-orm";
type GreaterThanOperatorType = typeof gt
type GreaterThan = typeof greaterThan
export {
    GreaterThanOperatorType
};
export default GreaterThan