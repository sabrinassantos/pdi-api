import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { UserRepository } from "src/domain/repositories/user.repository";
import { Repository } from "typeorm";
import { User, UserCreate } from "../../../domain/entities/user";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserRepositoryTypeORM implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}
  async create(userCreate: UserCreate): Promise<User> {
    const user = this.userEntityRepository.create(userCreate);
    const userCreated = await this.userEntityRepository.save(user);
    return userCreated.toDomain();
  }
  async getAll(): Promise<User[]> {
    const users = await this.userEntityRepository.find();
    const usersDomain = users.map((user) =>
    user.toDomain(),
    );
    return usersDomain;
  }
}