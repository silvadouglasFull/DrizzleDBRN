import { openDatabaseSync } from "expo-sqlite";
import { configDb } from "@config/constants"
const expo = openDatabaseSync(`${configDb.name}.db`);
export default expo