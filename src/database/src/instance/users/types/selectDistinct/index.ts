import selectDistinct from "@db/instance/users/read/selectDistinct";
import db from "@dbInstance/users/db";
type SelectDistinctInstance = typeof db.selectDistinct
type SelectDistinct = typeof selectDistinct
export {
    SelectDistinct, SelectDistinctInstance
};
