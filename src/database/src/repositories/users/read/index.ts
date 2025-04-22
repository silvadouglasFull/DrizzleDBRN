import query, { QueryUsersInstanceInterface } from "@db/instance/users/read/query";
import select, { SelectInterface } from '@db/instance/users/read/select';
import selectDistinct, { SelectDistinctInterface } from '@db/instance/users/read/selectDistinct';
import { Wheres } from "@db/queryBuilder/users/where/operators/types";
import where, { WhereQueryBuilderInterface } from "@dbQueryBuilder/users/where";
import user from '@dbUsersSchema/index';
import { User as UserType } from '@dbUsersSchema/types';
import createFieldsObject, { CreateFieldsObjectInterface } from "@dbUtils/users/createFieldsObject";

interface UsersRepositoryInterface {
    findMany(): Promise<UserType[]>
    findFirst(): Promise<UserType | undefined>
    get<K extends keyof UserType>(fields: K[]): Promise<Pick<UserType, K>[]>
    selectDistinct<K extends keyof UserType>(fields: K[]): Promise<Pick<UserType, K>[]>
    select<K extends keyof UserType>(
        fields: K[], wheres: Wheres[]
    ): Promise<Pick<UserType, K>[]>
}
class UsersRepository implements UsersRepositoryInterface {
    constructor(
        private query: QueryUsersInstanceInterface,
        private select_: SelectInterface,
        private selectDistinct_: SelectDistinctInterface,
        private createFieldsObject: CreateFieldsObjectInterface,
        private where: WhereQueryBuilderInterface
    ) {
    }
    async findMany(): Promise<UserType[]> {
        return await this.query.query.findMany()
    }
    async findFirst(): Promise<UserType | undefined> {
        return await this.query.query.findFirst()
    }
    async get<K extends keyof UserType>(fields: K[]): Promise<Pick<UserType, K>[]> {
        const result = await this.select_.select(this.createFieldsObject.createObject(fields)).from(user)
        return result as Pick<UserType, K>[];
    }
    async selectDistinct<K extends keyof UserType>(fields: K[]): Promise<Pick<UserType, K>[]> {
        const result = await this.selectDistinct_.selectDistinct(this.createFieldsObject.createObject(fields)).from(user)
        return result as Pick<UserType, K>[];
    }
    async select<K extends keyof UserType>(
        fields: K[], wheres: Wheres[]
    ): Promise<Pick<UserType, K>[]> {
        const fieldsObj = this.createFieldsObject.createObject(fields);
        const queryBuilder = this.select_.select(fieldsObj).from(user);
        if (wheres.length) {
            queryBuilder.where(this.where.where(wheres));
        }
        const result = await queryBuilder;
        return result as Pick<UserType, K>[]
    }

}
const User = new UsersRepository(query, select, selectDistinct, createFieldsObject, where)
export default User
