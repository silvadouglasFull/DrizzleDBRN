import { User } from "@dbUsersSchema/types";
import * as Types from "@dbUtils/users/createFieldsObject/types";
interface CreateFieldsObjectInterface {
    createObject<K extends keyof User>(fields: K[], user: Types.U): Record<K, Types.U[K]>
}
class CreateFieldsObject implements CreateFieldsObjectInterface {
    createObject<K extends keyof User>(fields: K[], user: Types.U): Record<K, Types.U[K]> {
        return {
            ...(fields.reduce((acc, field) => {
                acc[field] = user[field];
                return acc;
            }, {} as Record<K, Types.U[K]>)),
        }
    }
}
export {
    CreateFieldsObjectInterface
};
export default new CreateFieldsObject()