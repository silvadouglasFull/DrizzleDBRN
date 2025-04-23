import notEqual from "@dbFilterConditionalOperators/notEqual";
import { ne } from "drizzle-orm";
type NotEqualOperatorType = typeof ne
type NotEqual = typeof notEqual
export {
    NotEqualOperatorType
};
export default NotEqual