import equal from "@dbFilterConditionalOperators/equal";
import { eq } from "drizzle-orm";
type EqualOperatorType = typeof eq
type Equal = typeof equal
export {
    EqualOperatorType
};
export default Equal