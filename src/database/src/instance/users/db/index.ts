import expo from "@db/client/sqlLite";
import user from "@dbUsersSchema/index";
import { drizzle } from "drizzle-orm/expo-sqlite";

const schema = { user };

const db = drizzle(expo, { schema })
export default db