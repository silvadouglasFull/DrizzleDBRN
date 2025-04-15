import { drizzle } from "drizzle-orm/expo-sqlite";
import expo from "@db/client/sqlLite";
const db = drizzle(expo);
type DB = typeof db
export {
    DB,
    expo
}
export default db