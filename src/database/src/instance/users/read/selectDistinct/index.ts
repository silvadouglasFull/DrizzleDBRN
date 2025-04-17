import db from "@dbInstance/users/db";
import { QueryDBInstance } from "@dbInstance/users/types/db";
import { SelectDistinctInstance } from "@dbInstance/users/types/selectDistinct";
interface SelectDistinctInterface {
    get selectDistinct(): SelectDistinctInstance
}
class SelectDistinct implements SelectDistinctInterface {
    constructor(private db: QueryDBInstance) {
        this.db = db
    }
    public get selectDistinct() {
        return this.db.selectDistinct
    }
}
export {
    SelectDistinctInterface
};
export default new SelectDistinct(db)