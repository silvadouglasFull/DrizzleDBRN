import expo from "@db/client/sqlLite";
import empresa from "@dbEmpresaSchema/index";
import { drizzle } from "drizzle-orm/expo-sqlite";

const schema = { empresa };

const db = drizzle(expo, { schema })
export default db