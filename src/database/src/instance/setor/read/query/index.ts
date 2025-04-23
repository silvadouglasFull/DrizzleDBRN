import db from "@dbInstance/setor/db";
import DB from "@dbInstance/setor/db/types";
import { QueryInstance } from "@dbInstance/setor/read/query/types";
interface QuerySetorInstanceInterface {
    get query(): QueryInstance
}
class Query implements QuerySetorInstanceInterface {
    private db: DB
    constructor(db: DB) {
        this.db = db
    }
    public get query() {
        return this.db.query.setor;
    }
}
export {
    QuerySetorInstanceInterface
};
export default new Query(db)