import Query, { QueryUsersInstanceInterface } from "@dbInstance/users/query";
import Select, { SelectInterface } from '@dbInstance/users/select';
import SelectDistinct, { SelectDistinctInterface } from '@dbInstance/users/selectDistinct';
import user from '@dbUsersSchema/index';
import { User } from '@dbUsersSchema/types';
import createFieldsObject from "@dbUtils/users/createFieldsObject";
import { CreateFieldsObject } from "@dbUtils/users/createFieldsObject/types";
interface UsersRepositoryInterface {
    findMany(): Promise<User[]>
    findFirst(): Promise<User | undefined>
    select<K extends keyof User>(fields: K[]): Promise<Pick<User, K>[]>
}
class UsersRepository implements UsersRepositoryInterface {
    constructor(
        private query: QueryUsersInstanceInterface,
        private select_: SelectInterface,
        private selectDistinct_: SelectDistinctInterface,
        private createFieldsObject: CreateFieldsObject
    ) {
        this.createFieldsObject = createFieldsObject
    }
    async findMany(): Promise<User[]> {
        return await this.query.query.findMany()
    }
    async findFirst(): Promise<User | undefined> {
        return await this.query.query.findFirst()
    }
    async select<K extends keyof User>(fields: K[]): Promise<Pick<User, K>[]> {
        const result = await this.select_.select(this.createFieldsObject(fields, user)).from(user)
        return result as Pick<User, K>[];
    }
    async selectDistinct() {
        return this.selectDistinct_.selectDistinct().from(user).groupBy()
    }
}
const User = new UsersRepository(Query, Select, SelectDistinct, createFieldsObject)