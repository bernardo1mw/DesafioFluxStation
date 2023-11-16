import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth.module';
import { RepositoryFactoryModule } from './modules/repository-factory.module';
import { SharedModule } from './modules/shared.module';
import { UserModule } from './modules/user.module';
import { RefuelHistoryModule } from './modules';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		AuthModule,
		RepositoryFactoryModule,
		SharedModule,
		UserModule,
		RefuelHistoryModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
