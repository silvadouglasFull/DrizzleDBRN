import { drizzle } from "drizzle-orm/expo-sqlite";
import expo from "@db/client/sqlLite";
import user from "@db/schemas/users";
import { InstanceDataBase, InstanceUsersDataBase } from "@dbInstance/users/types";

const schema = { user };

const db = drizzle(expo, { schema })
interface DataBaseInterface {
    get instance(): InstanceUsersDataBase
}
class DataBase implements DataBaseInterface {
    private db: InstanceDataBase
    constructor(db: InstanceDataBase) {
        this.db = db
    }
    public get instance() {
        return this.db.query.user;
    }
}

const UsersInstance = new DataBase(db).instance;
export {
    db,
    DataBaseInterface,
}
export default UsersInstance;
