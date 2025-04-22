import empresa from "@dbEmpresaSchema/index"
import { Empresa } from "@dbEmpresaSchema/types"
import query, { QueryEmpresaInstanceInterface } from "@dbInstance/empresa/read/query"
import select, { SelectInterface } from "@dbInstance/empresa/read/select"
import { Wheres } from "@dbQueryBuilder/empresa/operators/types"
import where, { WhereQueryBuilderInterface } from "@dbQueryBuilder/empresa/where"
import createFieldsObject, { CreateFieldsObjectInterface } from "@dbUtils/empresa/createFieldsObject"
interface EmpresaRepositoryInterface {
    findMany(): Promise<Empresa[]>
    findFirst(): Promise<Empresa | undefined>
    select<K extends keyof Empresa>(
        fields: K[], wheres: Wheres[]
    ): Promise<Pick<Empresa, K>[]>
}
class EmpresaRepository implements EmpresaRepositoryInterface {
    constructor(private query: QueryEmpresaInstanceInterface, private select_: SelectInterface, private createFieldsObject: CreateFieldsObjectInterface, private where: WhereQueryBuilderInterface) {
    }
    async findMany(): Promise<Empresa[]> {
        return await this.query.query.findMany()
    }
    async findFirst(): Promise<Empresa | undefined> {
        return await this.query.query.findFirst()
    }
    async select<K extends keyof Empresa>(
        fields: K[], wheres: Wheres[]
    ): Promise<Pick<Empresa, K>[]> {
        const fieldsObj = this.createFieldsObject.createObject(fields);
        const queryBuilder = this.select_.select(fieldsObj).from(empresa);
        if (wheres.length) {
            queryBuilder.where(this.where.where(wheres));
        }
        const result = await queryBuilder;
        return result as Pick<Empresa, K>[]
    }
}
export default new EmpresaRepository(query, select, createFieldsObject, where)