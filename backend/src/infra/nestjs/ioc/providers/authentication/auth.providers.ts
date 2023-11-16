import { FactoryProvider, Provider } from '@nestjs/common';
import { AuthProviderEnum } from './auth.constants';
import SignupUsecase from '../../../../../application/usecase/SignupUsecase';
import { UuidGenerator } from '../../../../../domain/crypto/Uuid';
import UserRepository from '../../../../../domain/repositories/UserRepository';
import { RepositoryProviderEnum } from '../repository/repository.constants';
import Login from '../../../../../application/usecase/LoginUsecase';
import { SharedProviderEnum } from '../shared/shared.constants';
import { TokenGenerator } from '../../../../../domain/domain-service';
import RefreshTokenUsecase from '../../../../../application/usecase/RefreshTokenUsecase';

const signupUsecaseProvider: FactoryProvider = {
	provide: AuthProviderEnum.SignupUsecase,
	useFactory: (uuidGenerator: UuidGenerator, userRepository: UserRepository) =>
		new SignupUsecase(uuidGenerator, userRepository),
	inject: [
		SharedProviderEnum.UUIDGenerator,
		RepositoryProviderEnum.UserRepository,
	],
};

const loginUsecaseProvider: FactoryProvider = {
	provide: AuthProviderEnum.LoginUsecase,
	useFactory: (
		tokenGenerator: TokenGenerator,
		userRepository: UserRepository,
	) => new Login(tokenGenerator, userRepository),
	inject: [
		SharedProviderEnum.TokenGenerator,
		RepositoryProviderEnum.UserRepository,
	],
};

const refreshTokenUsecaseProvider: FactoryProvider = {
	provide: AuthProviderEnum.RefreshTokenUsecase,
	useFactory: (
		tokenGenerator: TokenGenerator,
		userRepository: UserRepository,
	) => new RefreshTokenUsecase(tokenGenerator, userRepository),
	inject: [
		SharedProviderEnum.TokenGenerator,
		RepositoryProviderEnum.UserRepository,
	],
};

export const authProviders: Provider[] = [
	signupUsecaseProvider,
	loginUsecaseProvider,
	refreshTokenUsecaseProvider,
];

export const authExports: Provider[] = [
	signupUsecaseProvider,
	loginUsecaseProvider,
	refreshTokenUsecaseProvider,
];
