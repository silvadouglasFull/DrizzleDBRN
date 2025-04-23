import { AndOperatorType } from "@dbFilterConditionalOperators/and/types";
import { and as and_ } from "drizzle-orm";

interface AndInterface {
    get and(): AndOperatorType
}
class And implements AndInterface {
    constructor(private and_: AndOperatorType) {

    }
    public get and(): AndOperatorType {
        return this.and_
    }
}
export {
    AndInterface
};
export default new And(and_)