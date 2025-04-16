import db from "@dbInstance/users/db";
import select from "@dbInstance/users/select";
type SelectInstance = typeof db.select
type Select = typeof select
export {
    Select, SelectInstance
};
