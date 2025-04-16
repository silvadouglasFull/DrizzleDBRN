import { configDb } from "@dbConfig/index";
import { openDatabaseSync } from "expo-sqlite";
const expo = openDatabaseSync(`${configDb.name}.db`);
export default expo