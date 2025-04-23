import applyWhere, { ApplyWhereInterface } from "@dbQueryBuilder/users/where/applyWhere";
import { WhereClause, Wheres } from "@dbQueryBuilder/users/where/operators/types";
import { SQL } from "drizzle-orm";
interface WhereQueryBuilderInterface {
    where(rops: Wheres | Wheres[]): SQL | SQL[];
}
class Where implements WhereQueryBuilderInterface {
    constructor(private applyWhere: ApplyWhereInterface) {
    }
    public where(clauses: Wheres): SQL | SQL[] {
        if (Array.isArray(clauses[0])) {
            return (clauses as Array<WhereClause>).map(this.applyWhere.apply);
        }
        return this.applyWhere.apply(clauses as WhereClause)
    }

}
export {
    WhereQueryBuilderInterface
};
export default new Where(applyWhere)
