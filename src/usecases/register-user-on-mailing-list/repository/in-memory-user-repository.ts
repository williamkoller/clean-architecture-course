import { UserRepository } from '@/usecases/ports/user-repository';
import { UserData } from '@/usecases/register-user-on-mailing-list/user-data';

export class InMemoryUserRepository implements UserRepository {
  private readonly repository: UserData[];

  constructor(users: UserData[]) {
    this.repository = users;
  }

  async add(user: UserData): Promise<void> {
    const exists = await this.exists(user);
    if (!exists) {
      this.repository.push(user);
    }
  }

  async findUserByEmail(email: string): Promise<UserData> {
    const user = this.repository.find((user) => user.email === email);
    if (!user) return null;
    return user;
  }

  async findAllUsers(): Promise<UserData[]> {
    return this.repository;
  }

  async exists(user: UserData): Promise<boolean> {
    return (await this.findUserByEmail(user.email)) !== null;
  }
}
