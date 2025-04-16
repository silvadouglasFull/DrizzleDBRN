import db from "@dbInstance/users/db";
import selectDistinct from "@dbInstance/users/selectDistinct"
type SelectDistinctInstance = typeof db.selectDistinct
type SelectDistinct = typeof selectDistinct
export {
    SelectDistinctInstance,
    SelectDistinct
}