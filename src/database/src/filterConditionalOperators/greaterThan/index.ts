import { GreaterThanOperatorType } from "@db/filterConditionalOperators/greaterThan/types";
import { gt } from "drizzle-orm";

interface GreaterThanInterface {
    get gt(): GreaterThanOperatorType
}
class GreaterThan implements GreaterThanInterface {
    constructor(private greaterThan: GreaterThanOperatorType) {

    }
    public get gt(): GreaterThanOperatorType {
        return this.greaterThan
    }
}
export {
    GreaterThanInterface
};
export default new GreaterThan(gt)