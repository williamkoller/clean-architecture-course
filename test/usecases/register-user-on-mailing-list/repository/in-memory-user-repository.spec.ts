import { UserData } from '@/usecases/register-user-on-mailing-list/user-data';
import { UserRepository } from '@/usecases/ports/user-repository';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository/in-memory-user-repository';

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = [];
    const sut: UserRepository = new InMemoryUserRepository(users);
    const user = await sut.findUserByEmail('any_email.com');
    expect(user).toBeNull();
  });

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = [];
    const name = 'any_name';
    const email = 'any_email.com';
    const sut: UserRepository = new InMemoryUserRepository(users);
    await sut.add({ name, email });
    const user = await sut.findUserByEmail(email);
    expect(user.name).toBe('any_name');
  });

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      {
        name: 'any_name',
        email: 'any_email.com',
      },
      {
        name: 'second_name',
        email: 'second_email.com',
      },
    ];

    const sut: UserRepository = new InMemoryUserRepository(users);
    const usersList = await sut.findAllUsers();
    expect(usersList).toHaveLength(2);
    expect(usersList[0].name).toBe('any_name');
    expect(usersList[0].email).toBe('any_email.com');
  });
});
