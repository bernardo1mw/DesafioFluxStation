import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth.controller';
import { authExports, authProviders } from '../providers/authentication';

@Module({
	controllers: [AuthController],
	providers: [...authProviders],
	exports: [...authExports],
})
export class AuthModule {}
