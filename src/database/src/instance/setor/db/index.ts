import expo from "@db/client/sqlLite";
import setor from "@dbSetorSchema/index";
import { drizzle } from "drizzle-orm/expo-sqlite";
const schema = { setor };

const db = drizzle(expo, { schema })
export default db