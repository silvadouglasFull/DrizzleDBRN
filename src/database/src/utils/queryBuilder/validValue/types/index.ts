import { User } from "@dbUsersSchema/types";
import isVaid from "@dbUtils/queryBuilder/validValue";
type Value = User[keyof User];
type IsValid = typeof isVaid
export { Value };
export default IsValid
