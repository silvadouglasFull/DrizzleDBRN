import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

const expo = openDatabaseSync(`${configDb.name}.db`);
const db = drizzle(expo);
export type DB = typeof db
export default db