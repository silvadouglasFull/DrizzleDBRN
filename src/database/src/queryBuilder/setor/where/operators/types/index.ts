import { Setor } from "@dbSetorSchema/types";

type Operator = '=' | '>' | '<' | '>=' | '<=' | '<>' | '!=' | 'LIKE';

type WhereClause<K extends keyof Setor = keyof Setor> = [K, Operator, Setor[K]];

type Wheres<K extends keyof Setor = keyof Setor> = WhereClause<K> | Array<WhereClause<K>>

export {
    Operator, WhereClause,
    Wheres
};

