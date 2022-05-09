import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserRepositoryTypeORM } from '../repositories/user.repositry.typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'pdi',
      password: 'pd1',
      database: 'pdi',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    UserRepositoryTypeORM,
  
  ],
  exports: [
    UserRepositoryTypeORM,   
  ],
})
export class TypeOrmConfigModule {}
