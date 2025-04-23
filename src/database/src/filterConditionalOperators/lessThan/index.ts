import { LessThanOperatorType } from "@db/filterConditionalOperators/lessThan/types";
import { lt } from "drizzle-orm";

interface LessThanOperatorInterface {
    get lt(): LessThanOperatorType
}
class LessThanOperator implements LessThanOperatorInterface {
    constructor(private lessThan: LessThanOperatorType) {

    }
    public get lt(): LessThanOperatorType {
        return this.lessThan
    }
}
export {
    LessThanOperatorInterface
};
export default new LessThanOperator(lt)