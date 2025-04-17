import { User } from "@dbUsersSchema/types";

type Operator = '=' | '>' | '<' | '>=' | '<=' | '<>' | '!=' | 'LIKE';

type WhereClause<K extends keyof User = keyof User> = [K, Operator, User[K]];

type Wheres<K extends keyof User = keyof User> = WhereClause<K> | Array<WhereClause<K>>

export {
    Operator, WhereClause,
    Wheres
};

