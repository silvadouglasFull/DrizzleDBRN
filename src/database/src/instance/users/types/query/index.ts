import db from "@dbInstance/users/db"
import query from "@dbInstance/users/read/query"
type QueryDBInstance = typeof db
type QueryInstance = typeof db.query.user
type Query = typeof query
export {
    Query,
    QueryDBInstance,
    QueryInstance
}

