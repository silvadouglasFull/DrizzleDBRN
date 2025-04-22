import db from "@dbInstance/users/db";
import { QueryDBInstance } from "@dbInstance/users/types/query";

class DataBase {
    constructor(private db: QueryDBInstance) {
        this.db = db
    }
    public get query() {
        return this.db.query.user;
    }
}

const UsersInstance = new DataBase(db);
export default UsersInstance;
