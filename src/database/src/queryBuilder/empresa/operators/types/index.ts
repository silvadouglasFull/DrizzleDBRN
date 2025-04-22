import { Empresa } from "@dbEmpresaSchema/types";

type Operator = '=' | '>' | '<' | '>=' | '<=' | '<>' | '!=' | 'LIKE';

type WhereClause<K extends keyof Empresa = keyof Empresa> = [K, Operator, Empresa[K]];

type Wheres<K extends keyof Empresa = keyof Empresa> = WhereClause<K> | Array<WhereClause<K>>

export {
    Operator, WhereClause,
    Wheres
};

