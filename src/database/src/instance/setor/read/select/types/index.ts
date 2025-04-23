import select from "@db/instance/setor/read/select";
import db from "@dbInstance/setor/db";
type SelectInstance = typeof db.select
type Select = typeof select
export {
    Select, SelectInstance
};

