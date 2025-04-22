import { Value } from "@db/utils/users/queryBuilder/validValue/types";

interface IsValidInterface {
    isValid(value: Value): boolean
}
class IsValid implements IsValidInterface {
    isValid(value: Value): boolean {
        return value !== undefined
    }
}
export {
    IsValidInterface
};
export default new IsValid()