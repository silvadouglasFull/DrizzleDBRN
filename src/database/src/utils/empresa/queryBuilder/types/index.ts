import { Empresa } from "@dbEmpresaSchema/types";
import isVaid from "@dbUtils/empresa/queryBuilder/validValue";
type Value = Empresa[keyof Empresa];
type IsValid = typeof isVaid
export { Value };
export default IsValid
