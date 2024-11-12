import { UserData } from '@/usecases/register-user-on-mailing-list/user-data';
import { UserRepository } from '@/usecases/ports/user-repository';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository/in-memory-user-repository';
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list/register-user-on-mailing-list';

describe('Register user on mailing list use case', () => {
  test('should add user with complete data to mailing list', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
      repo
    );
    const name = 'any_name';
    const email = 'any@email,com';
    const response = await usecase.registerUserOnMailingList({ name, email });
    await repo.add({
      name,
      email,
    });
    const user = repo.findUserByEmail('any_email.com');
    expect((await user).name).toBe('any_name');
    expect((await user).email).toBe('any_email.com');
    expect(response).toBeUndefined();
  });
});
