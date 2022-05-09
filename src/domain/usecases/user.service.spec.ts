
import { UserCreate } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from './user.service';

let UserMockRepository: jest.Mocked<UserRepository>;
const MockUserCreate: UserCreate = { 
  email: 'user@pdi.com.br',
  name: 'user01',

};

describe('UserService', () => {  
  beforeEach(async () => {
    UserMockRepository = {
      ...UserMockRepository,
      create: jest.fn(),
      getAll: jest.fn(),
  }
  });

  it('Must Call repository one time', async () => {
    const SUT = createUserService();
  
    await SUT.create(MockUserCreate);
    expect(UserMockRepository.create).toBeCalledTimes(1);
  });

  const createUserService = () => {
    return new UserService(
      UserMockRepository
    );
  }
});
