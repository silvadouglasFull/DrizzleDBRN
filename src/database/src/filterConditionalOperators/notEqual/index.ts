import { NotEqualOperatorType } from "@db/filterConditionalOperators/notEqual/types";
import { ne } from "drizzle-orm";

interface NotEqualInterface {
    get ne(): NotEqualOperatorType
}
class NotEqual implements NotEqualInterface {
    constructor(private notequal: NotEqualOperatorType) {

    }
    public get ne(): NotEqualOperatorType {
        return this.notequal
    }
}
export {
    NotEqualInterface
};
export default new NotEqual(ne)