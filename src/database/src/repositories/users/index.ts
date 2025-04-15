import { UsersTypeInstance } from '@dbInstance/users/types'
import Users from "@dbInstance/users"
import { User } from '@dbSchemas/users/types/users';
interface UsersRepositoryInterface {
    get(): Promise<User[]>
    find(): Promise<User | undefined>
}
class UsersRepository implements UsersRepositoryInterface {
    private instance: UsersTypeInstance
    constructor(instance: UsersTypeInstance) {
        this.instance = instance
    }
    async get(): Promise<User[]> {
        return await this.instance.findMany()
    }
    async find(): Promise<User | undefined> {
        return await this.instance.findFirst()
    }
}
const U = new UsersRepository(Users)