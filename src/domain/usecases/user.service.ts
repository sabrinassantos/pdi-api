import { Injectable } from '@nestjs/common';
import { User, UserCreate } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,       
      ) {}

    async create(user: UserCreate): Promise<void> {
        await this.userRepository.create(user);
    }

    async getAll(): Promise<User[]> {
        const users = await this.userRepository.getAll();
        return users;
      }
}
