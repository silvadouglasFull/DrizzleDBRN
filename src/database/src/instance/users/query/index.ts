import db from "@dbInstance/users/db";
import { QueryDBInstance, QueryInstance } from "@dbInstance/users/types/query";

interface QueryUsersInstanceInterface {
    get query(): QueryInstance
}
class Query implements QueryUsersInstanceInterface {
    private db: QueryDBInstance
    constructor(db: QueryDBInstance) {
        this.db = db
    }
    public get query() {
        return this.db.query.user;
    }
}
export {
    QueryUsersInstanceInterface
};
export default new Query(db)