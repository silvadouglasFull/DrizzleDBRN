import { Setor } from "@dbSetorSchema/types";
import isVaid from "@dbUtils/setor/queryBuilder/validValue";
type Value = Setor[keyof Setor];
type IsValid = typeof isVaid
export { Value };
export default IsValid
