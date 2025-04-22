import { GreaterThanOrEqualtoOperatorType } from "@dbOperators/greaterThanOrEqualto/types";
import { gte } from "drizzle-orm";

interface GreaterThanOrEqualToInterface {
    get gte(): GreaterThanOrEqualtoOperatorType
}
class GreaterThanOrEqualTo implements GreaterThanOrEqualToInterface {
    constructor(private greaterThanOrEqualto: GreaterThanOrEqualtoOperatorType) {

    }
    public get gte(): GreaterThanOrEqualtoOperatorType {
        return this.greaterThanOrEqualto
    }
}
export {
    GreaterThanOrEqualToInterface
};
export default new GreaterThanOrEqualTo(gte)