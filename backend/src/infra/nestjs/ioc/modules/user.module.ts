import { Module } from '@nestjs/common';
import { UserController } from '../../controllers/user.controller';
import { userExports, userProviders } from '../providers';

@Module({
	controllers: [UserController],
	providers: [...userProviders],
	exports: [...userExports],
})
export class UserModule {}
