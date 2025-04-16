import Users, { db } from "@dbInstance/users"
type UsersTypeInstance = typeof Users
type InstanceDataBase = typeof db
type InstanceUsersDataBase = typeof db.query.user
export {
    InstanceDataBase,
    InstanceUsersDataBase,
    UsersTypeInstance,
}