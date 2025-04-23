import user from "@dbEmpresaSchema/index";
import E, { Empresa } from "@dbEmpresaSchema/types";
interface CreateFieldsObjectInterface {
    createObject<K extends keyof Empresa>(fields: K[]): Record<K, E[K]>
}
class CreateFieldsObject implements CreateFieldsObjectInterface {
    createObject<K extends keyof Empresa>(
        fields: K[],
    ): { [key in K]: any } {
        return fields.reduce((acc, field) => {
            acc[field] = user[field];
            return acc;
        }, {} as Record<K, E[K]>);
    }

}
export {
    CreateFieldsObjectInterface
};
export default new CreateFieldsObject()