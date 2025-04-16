import expo from "@dbClient/sqlLite";
import { drizzle } from "drizzle-orm/expo-sqlite";
const db = drizzle(expo);
type DB = typeof db
export {
    DB,
    expo
};
export default db