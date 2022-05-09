import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../../domain/usecases/user.service';
import { UserController } from './user.controller';


describe('UserController', () => {
  let controller: UserController;
  const userServiceMock = {
    getAll: jest.fn(),
    create: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{
        provide: UserService,
        useValue: userServiceMock,
      }],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
 
});
