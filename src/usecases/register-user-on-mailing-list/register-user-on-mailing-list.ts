import { UserRepository } from '@/usecases/ports/user-repository';

export class RegisterUserOnMailingList {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUserOnMailingList(request: {
    name: string;
    email: string;
  }): Promise<void> {
    const userAlreadyExists = await this.userRepository.exists(request);
    if (!userAlreadyExists) {
      await this.userRepository.add(request);
    }
  }
}
