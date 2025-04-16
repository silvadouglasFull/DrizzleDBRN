import user from "@dbUsersSchema/index";
import createFieldsObject from "@dbUtils/users/createFieldsObject";
type U = typeof user
type CreateFieldsObject = typeof createFieldsObject
export {
    CreateFieldsObject, U
};
