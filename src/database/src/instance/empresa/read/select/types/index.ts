import select from "@db/instance/empresa/read/select";
import db from "@dbInstance/empresa/db";
type SelectInstance = typeof db.select
type Select = typeof select
export {
    Select, SelectInstance
};

