import isVaid from "@db/utils/users/queryBuilder/validValue";
import { User } from "@dbUsersSchema/types";
type Value = User['usu_emp'];
type IsValid = typeof isVaid
export { Value };
export default IsValid
