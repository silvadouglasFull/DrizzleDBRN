import db from "@dbInstance/setor/db"
import query from "@dbInstance/setor/read/query"
type QueryInstance = typeof db.query.setor
type Query = typeof query
export {
    Query,
    QueryInstance
}

