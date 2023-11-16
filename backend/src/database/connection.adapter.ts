import { DataSource } from 'typeorm';
import { DatabaseConnection } from './connection';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export class TypeOrmConnectionAdapter
	implements DatabaseConnection<DataSource>
{
	private dataSource: DataSource;

	isInitialized(): boolean {
		return this.dataSource?.isInitialized;
	}

	async connect(): Promise<void> {
		try {
			const connection = new DataSource({
				type: 'postgres',
				host: configService.getOrThrow('POSTGRES_HOST'),
				port: configService.getOrThrow('POSTGRES_PORT'),
				database: configService.getOrThrow('POSTGRES_DB'),
				username: configService.getOrThrow('POSTGRES_USER'),
				password: configService.getOrThrow('POSTGRES_PASSWORD'),
				migrations: ['migrations/**'],
				entities: [`${__dirname}/mapping/*.{js,ts}`],
			});

			this.dataSource = await connection.initialize();
		} catch (error) {
			console.error(error);
			throw new Error('Failed to connect to database');
		}
	}

	getConnection(): DataSource {
		return this.dataSource;
	}
}
