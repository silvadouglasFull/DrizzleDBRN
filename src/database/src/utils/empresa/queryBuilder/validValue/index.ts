import { Value } from "@dbUtils/empresa/queryBuilder/types";

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