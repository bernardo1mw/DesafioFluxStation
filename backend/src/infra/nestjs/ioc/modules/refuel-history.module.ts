import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth.controller';
import { authExports, authProviders } from '../providers/authentication';
import {
	refuelHistoryExports,
	refuelHistoryProviders,
} from '../providers/refuel-history';
import { RefuelHistoryController } from '../../controllers';

@Module({
	controllers: [RefuelHistoryController],
	providers: [...refuelHistoryProviders],
	exports: [...refuelHistoryExports],
})
export class RefuelHistoryModule {}
