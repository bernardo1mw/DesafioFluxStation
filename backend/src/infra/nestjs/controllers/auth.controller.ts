import {
	Body,
	Controller,
	Get,
	Inject,
	Post,
	Req,
	Request,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/Auth.guard';
import { AuthProviderEnum } from '../ioc/providers/authentication/auth.constants';
import Login from '../../../application/usecase/LoginUsecase';
import Signup from '../../../application/usecase/SignupUsecase';
import { RefreshJwtGuard } from '../../guards/Refresh.guard';
import RefreshTokenUsecase from '../../../application/usecase/RefreshTokenUsecase';

@Controller('auth')
export class AuthController {
	constructor(
		@Inject(AuthProviderEnum.LoginUsecase)
		private readonly loginUsecase: Login,
		@Inject(AuthProviderEnum.SignupUsecase)
		private readonly signupUsecase: Signup,
		@Inject(AuthProviderEnum.RefreshTokenUsecase)
		private readonly refreshTokenUsecase: RefreshTokenUsecase,
	) {}

	@Post('login')
	async login(@Body() { document, password }): Promise<any> {
		return this.loginUsecase.execute({
			document,
			password,
		});
	}

	@Post('signup')
	async signup(@Body() { name, document, password }): Promise<any> {
		return this.signupUsecase.execute({
			name,
			document,
			password,
		});
	}

	@UseGuards(RefreshJwtGuard)
	@Post('refresh')
	async refreshToken(@Request() req): Promise<any> {
		return await this.refreshTokenUsecase.execute({
			document: req.user.document,
		});
	}
}
