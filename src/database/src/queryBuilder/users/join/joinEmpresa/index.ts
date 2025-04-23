import applyJoin from "@dbQueryBuilder/users/join/applyJoin"
import Joins, { JoinClause } from "@dbQueryBuilder/users/join/joinEmpresa//operators/types"
import { SQL } from "drizzle-orm"
import { ApplyJoinInterface } from "../applyJoin"

interface JoinQueryBuilderInterface {
    join(joins: Joins): SQL | SQL[]
}
class JoinQueryBuilder implements JoinQueryBuilderInterface {
    constructor(
        private apply: ApplyJoinInterface) { }
    join(joins: Joins): SQL | SQL[] {
        if (Array.isArray(joins[0])) {
            return (joins as Array<JoinClause>).map(this.apply.apply);
        }
        return this.apply.apply(joins as JoinClause)
    }
}
export {
    JoinQueryBuilderInterface
}
export default new JoinQueryBuilder(applyJoin)