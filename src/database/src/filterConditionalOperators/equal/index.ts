import { EqualOperatorType } from "@db/filterConditionalOperators/equal/types";
import { eq } from "drizzle-orm";

interface EqualInterface {
    get eq(): EqualOperatorType
}
class Equal implements EqualInterface {
    constructor(private equal: EqualOperatorType) {

    }
    public get eq(): EqualOperatorType {
        return this.equal
    }
}
export {
    EqualInterface
};
export default new Equal(eq)