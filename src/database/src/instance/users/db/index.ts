import { drizzle } from "drizzle-orm/expo-sqlite";
import expo from "@db/client/sqlLite";
import user from "@db/schemas/users";

const schema = { user };

const db = drizzle(expo, { schema })
export default db