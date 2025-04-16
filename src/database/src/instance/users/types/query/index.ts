import query from "@db/instance/users/read/query"
import db from "@dbInstance/users/db"
type QueryDBInstance = typeof db
type QueryInstance = typeof db.query.user
type Query = typeof query
export {
    Query, QueryDBInstance,
    QueryInstance
}
