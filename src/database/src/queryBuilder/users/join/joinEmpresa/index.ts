import and_, { AndInterface } from "@dbFilterConditionalOperators/and";
import applyJoin, { ApplyJoinInterface } from "@dbQueryBuilder/users/join/applyJoin";
import Joins, { JoinClause } from "@dbQueryBuilder/users/join/joinEmpresa//operators/types";
import { SQL } from "drizzle-orm";

interface JoinQueryBuilderInterface {
    join(joins: Joins): SQL | undefined
}
class JoinQueryBuilder implements JoinQueryBuilderInterface {
    constructor(
        private apply: ApplyJoinInterface, private and: AndInterface) { }
    join(joins: Joins): SQL | undefined {
        if (Array.isArray(joins[0])) {
            const joinsConditions = (joins as Array<JoinClause>).map(this.apply.apply);
            return joinsConditions.length > 1 ? this.and.and(...joinsConditions) : joinsConditions[0]
        }
        return this.apply.apply(joins as JoinClause)
    }
}
export {
    JoinQueryBuilderInterface
};
export default new JoinQueryBuilder(applyJoin, and_)