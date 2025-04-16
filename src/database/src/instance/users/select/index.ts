import db from "@dbInstance/users/db";
import { QueryDBInstance } from "@dbInstance/users/types/db";
import { SelectInstance } from "@dbInstance/users/types/select";
interface SelectInterface {
    get select(): SelectInstance
}
class Select implements SelectInterface {
    constructor(private db: QueryDBInstance) {
        this.db = db
    }
    public get select() {
        return this.db.select
    }
}
const select = new Select(db)
export default select.select