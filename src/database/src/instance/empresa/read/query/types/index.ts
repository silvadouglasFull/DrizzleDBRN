import db from "@dbInstance/empresa/db"
import query from "@dbInstance/empresa/read/query"
type QueryDBInstance = typeof db
type QueryInstance = typeof db.query.empresa
type Query = typeof query
export {
    Query,
    QueryDBInstance,
    QueryInstance
}

