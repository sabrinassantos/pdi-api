import { User, UserCreate } from "../entities/user";

export interface UserRepository {
    create(user: UserCreate): Promise<User>;
    getAll(): Promise<User[]>;
}