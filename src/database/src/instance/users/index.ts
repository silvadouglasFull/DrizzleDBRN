import { drizzle } from "drizzle-orm/expo-sqlite";
import expo from "@db/client/sqlLite";
import user from "@db/schemas/users";

const schema = { user };


class Database {
    private db = drizzle(expo, { schema });

    // Expondo a instância da tabela 'user' como propriedade
    public get instance() {
        return this.db.query.user;
    }
}

const Users = new Database().instance;

export default Users;
