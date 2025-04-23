import apply, { ApplyWhereInterface } from "@dbQueryBuilder/setor/where/applyWhere";
import { WhereClause, Wheres } from "@dbQueryBuilder/setor/where/operators/types";
interface WhereQueryBuilderInterface {
    where(rops: Wheres | Wheres[]): any;
}
class Where implements WhereQueryBuilderInterface {
    constructor(private apply: ApplyWhereInterface) {
    }
    public where(clauses: Wheres): any {
        if (Array.isArray(clauses[0])) {
            return (clauses as Array<WhereClause>).map(this.apply.apply);
        }
        return this.apply.apply(clauses as WhereClause)
    }

}
export {
    WhereQueryBuilderInterface
};
export default new Where(apply)
