import {
	FactoryProvider,
	Provider,
	ClassProvider,
	ServiceUnavailableException,
} from '@nestjs/common';
import { DatabaseConnection } from '../../../../../database/connection';
import { SharedProviderEnum } from './shared.constants';
import { TypeOrmConnectionAdapter } from '../../../../../database/connection.adapter';
import { UuidGenerator } from '../../../../../domain/crypto/Uuid';
import { UUIDAdapter } from '../../../../crypto/uuid.adapter';
import { TokenGenerator } from '../../../../../domain/domain-service/TokenGenerator';
import { ConfigService } from '@nestjs/config';
import { TokenManager } from '../../../../../domain/crypto/Token';

// - DATABASE
const databaseProvider: FactoryProvider<DatabaseConnection> = {
	provide: SharedProviderEnum.DatabaseConnection,
	inject: [ConfigService],
	useFactory: async (): Promise<DatabaseConnection> => {
		try {
			const db = new TypeOrmConnectionAdapter();
			await db.connect();
			return db;
		} catch (error) {
			throw new ServiceUnavailableException(error);
		}
	},
};

const uuidGeneratorProvider: ClassProvider<UuidGenerator> = {
	provide: SharedProviderEnum.UUIDGenerator,
	useClass: UUIDAdapter,
};

const tokenManagerProvider: ClassProvider<TokenGenerator> = {
	provide: SharedProviderEnum.TokenGenerator,
	useClass: TokenGenerator,
};

export const sharedProvider: Provider[] = [
	databaseProvider,
	uuidGeneratorProvider,
	tokenManagerProvider,
];
