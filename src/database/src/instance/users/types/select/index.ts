import select from "@db/instance/users/read/select";
import db from "@dbInstance/users/db";
type SelectInstance = typeof db.select
type Select = typeof select
export {
    Select, SelectInstance
};

