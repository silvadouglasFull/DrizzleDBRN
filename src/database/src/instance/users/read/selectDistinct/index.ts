import db from "@dbInstance/users/db";
import { QueryDBInstance } from "@dbInstance/users/types/db";
import { SelectDistinctInstance } from "@dbInstance/users/types/selectDistinct";
interface SelectDistinctInterface {
    get selectDistinct(): SelectDistinctInstance
}
class Select implements SelectDistinctInterface {
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
export default new Select(db)