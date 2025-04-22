import db from "@dbInstance/empresa/db";
import { QueryDBInstance, QueryInstance } from "@dbInstance/empresa/read/query/types";

interface QueryEmpresaInstanceInterface {
    get query(): QueryInstance
}
class Query implements QueryEmpresaInstanceInterface {
    private db: QueryDBInstance
    constructor(db: QueryDBInstance) {
        this.db = db
    }
    public get query() {
        return this.db.query.empresa;
    }
}
export {
    QueryEmpresaInstanceInterface
};
export default new Query(db)