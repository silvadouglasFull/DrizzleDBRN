import db from "@dbInstance/empresa/db";
import { QueryDBInstance } from "@dbInstance/empresa/read/query/types";
import { SelectInstance } from "@dbInstance/empresa/read/select/types";
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
export {
    SelectInterface
};
export default new Select(db)