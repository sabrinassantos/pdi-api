import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/data/typeorm/config/typeorm-config.module';
import { UserEntity } from 'src/data/typeorm/entities/user.entity';
import { UserRepositoryTypeORM } from 'src/data/typeorm/repositories/user.repositry.typeorm';
import { UserService } from 'src/domain/usecases/user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [  {
    inject: [UserRepositoryTypeORM],
    provide: UserService,
    useFactory: (realtyRepository: UserRepositoryTypeORM) =>
      new UserService(realtyRepository),
  },],

  imports:[TypeOrmConfigModule]

})
export class UserModule {}
