import query from "@db/instance/users/query";
import select from '@db/instance/users/select';
import { Query } from '@db/instance/users/types/query';
import { Select } from '@db/instance/users/types/select';
import user from '@db/schemas/users';
import { User } from '@dbSchemas/users/types/users';
interface UsersRepositoryInterface {
    findMany(): Promise<User[]>
    findFirst(): Promise<User | undefined>
    select<K extends keyof User>(fields: K[]): Promise<Pick<User, K>[]>
}
class UsersRepository implements UsersRepositoryInterface {
    constructor(private query: Query, private select_: Select) {
        this.query = query
        this.select_ = select_
    }
    async findMany(): Promise<User[]> {
        return await this.query.findMany()
    }
    async findFirst(): Promise<User | undefined> {
        return await this.query.findFirst()
    }
    async select<K extends keyof User>(fields: K[]): Promise<Pick<User, K>[]> {
        const result = await this.select_({
            ...(fields.reduce((acc, field) => {
                acc[field] = user[field];
                return acc;
            }, {} as any)),
        }).from(user)
        return result as Pick<User, K>[];
    }
    async selectDistinct() {

    }
}
const User = new UsersRepository(query, select)