import and_, { AndInterface } from "@dbFilterConditionalOperators/and";
import applyWhere, { ApplyWhereInterface } from "@dbQueryBuilder/users/where/applyWhere";
import { WhereClause, Wheres } from "@dbQueryBuilder/users/where/operators/types";
import { SQL } from "drizzle-orm";
interface WhereQueryBuilderInterface {
    where(rops: Wheres | Wheres[]): SQL | undefined;
}
class Where implements WhereQueryBuilderInterface {
    constructor(private applyWhere: ApplyWhereInterface, private and: AndInterface) {
    }
    public where(clauses: Wheres): SQL | undefined {
        if (Array.isArray(clauses[0])) {
            const conditions = (clauses as Array<WhereClause>).map(this.applyWhere.apply).filter(Boolean);
            return conditions.length > 1 ? this.and.and(...conditions) : conditions[0];
        }
        return this.applyWhere.apply(clauses as WhereClause)
    }

}
export {
    WhereQueryBuilderInterface
};
export default new Where(applyWhere, and_)
