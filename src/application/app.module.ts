import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { UserService } from 'src/domain/usecases/user.service';
import { UserModule } from 'src/presentation/controllers/user/user.module';
import { UserController } from 'src/presentation/controllers/user/user.controller';




@Module({
  imports: [ 
    UserModule
  ], 
})
export class AppModule {}
