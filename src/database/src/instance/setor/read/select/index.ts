import db from "@dbInstance/setor/db";
import QueryDBInstance from "@dbInstance/setor/db/types";
import { SelectInstance } from "@dbInstance/setor/read/select/types";
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