import { UsersTypeInstance } from '@dbInstance/users/types'
import UsersInstance from "@dbInstance/users"
import { User } from '@dbSchemas/users/types/users';
interface UsersRepositoryInterface {
    get(): Promise<User[]>
    findFirst(): Promise<User | undefined>
}
class UsersRepository implements UsersRepositoryInterface {
    private instance: UsersTypeInstance
    constructor(instance: UsersTypeInstance) {
        this.instance = instance
    }
    async get(): Promise<User[]> {
        return await this.instance.findMany()
    }
    async findFirst(): Promise<User | undefined> {
        return await this.instance.findFirst()
    }
}
const User = new UsersRepository(UsersInstance)