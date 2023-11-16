import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: configService.getOrThrow('POSTGRES_HOST'),
	port: configService.getOrThrow('POSTGRES_PORT'),
	database: configService.getOrThrow('POSTGRES_DB'),
	username: configService.getOrThrow('POSTGRES_USER'),
	password: configService.getOrThrow('POSTGRES_PASSWORD'),
	synchronize: false,
	migrations: ['migrations/**'],
	entities: [],
});
