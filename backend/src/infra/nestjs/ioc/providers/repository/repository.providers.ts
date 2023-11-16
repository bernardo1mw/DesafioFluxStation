import { FactoryProvider, Provider } from '@nestjs/common';
import UserRepository from '../../../../../domain/repositories/UserRepository';
import { RepositoryProviderEnum } from './repository.constants';
import { DatabaseConnection } from '../../../../../database/connection';
import UserRepositoryTypeORMAdapter from '../../../../repositories/UserRepository';
import { SharedProviderEnum } from '../shared/shared.constants';
import RefuelHistoryRepository from '../../../../repositories/RefuelHistoryRepository';
import RefuelHistoryRepositoryTypeORMAdapter from '../../../../repositories/RefuelHistoryRepository';

const UserRepositoryProvider: FactoryProvider<UserRepository> = {
	provide: RepositoryProviderEnum.UserRepository,
	useFactory: (connection: DatabaseConnection) =>
		new UserRepositoryTypeORMAdapter(connection.getConnection()),
	inject: [SharedProviderEnum.DatabaseConnection],
};

const RefuelHistoryRepositoryProvider: FactoryProvider<RefuelHistoryRepository> =
	{
		provide: RepositoryProviderEnum.RefuelHistoryRepository,
		useFactory: (connection: DatabaseConnection) =>
			new RefuelHistoryRepositoryTypeORMAdapter(connection.getConnection()),
		inject: [SharedProviderEnum.DatabaseConnection],
	};

export const repositoryProviders: Provider[] = [
	UserRepositoryProvider,
	RefuelHistoryRepositoryProvider,
];
