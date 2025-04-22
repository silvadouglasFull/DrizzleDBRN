import { Empresa } from "@dbEmpresaSchema/types";
import { User } from "@dbUsersSchema/types";
type Operator = '=';
type NumericUserColumns = {
    [K in keyof User]: User[K] extends number ? K : never;
}[keyof User];
type NumericEmpresaColumns = {
    [K in keyof Empresa]: Empresa[K] extends number ? K : never;
}[keyof Empresa];

type UserColumn = Extract<NumericUserColumns, 'usu_emp'>;
type EmpresaColumn = Extract<NumericEmpresaColumns, 'id'>;
type JoinClause = [UserColumn, Operator, EmpresaColumn];
type Joins = JoinClause | Array<JoinClause>
export { JoinClause, Operator };

export default Joins