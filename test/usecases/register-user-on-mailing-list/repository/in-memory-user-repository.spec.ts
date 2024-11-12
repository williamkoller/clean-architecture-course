import { UserData } from '@/usecases/register-user-on-mailing-list/user-data';
import { UserRepository } from '@/usecases/ports/user-repository';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository/in-memory-user-repository';

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = [];
    const userRepo: UserRepository = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail('any_email.com');
    expect(user).toBeNull();
  });
});
