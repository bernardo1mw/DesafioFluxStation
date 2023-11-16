import { FactoryProvider, Provider } from '@nestjs/common';
import UserRepository from '../../../../../domain/repositories/UserRepository';
import { RepositoryProviderEnum } from '../repository/repository.constants';
import { UserProviderEnum } from './user.constants';
import FindUserByIdUsecase from '../../../../../application/usecase/FindUserByIdUsecase';

const findUserByIdUsecaseProvider: FactoryProvider = {
	provide: UserProviderEnum.FindUserByIdUsecase,
	useFactory: (userRepository: UserRepository) =>
		new FindUserByIdUsecase(userRepository),
	inject: [RepositoryProviderEnum.UserRepository],
};
export const userProviders: Provider[] = [findUserByIdUsecaseProvider];

export const userExports: Provider[] = [findUserByIdUsecaseProvider];
