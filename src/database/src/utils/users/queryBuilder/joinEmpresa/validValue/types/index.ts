import isVaid from "@db/utils/users/queryBuilder/validValue";
import { Empresa } from "@dbEmpresaSchema/types";
import { User } from "@dbUsersSchema/types";
type Value = User['usu_emp'] | Empresa['id'] | undefined;
type IsValid = typeof isVaid
export { Value };
export default IsValid
