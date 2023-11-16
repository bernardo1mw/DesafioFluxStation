import {
	CanActivate,
	ExecutionContext,
	Inject,
	Injectable,
} from '@nestjs/common';
import { SharedProviderEnum } from '../nestjs/ioc/providers/shared/shared.constants';
import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
import { TokenInvalidException } from '../../domain/exceptions/invalid-token.exception';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		@Inject(SharedProviderEnum.TokenGenerator)
		private readonly tokenManager: TokenGenerator,
	) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const request = context.switchToHttp().getRequest();
			const token = request.headers[`authorization`].replace(/^Bearer\s/, '');
			const payload = await this.tokenManager.verify(token, {
				secret: process.env.JWT_SECRET_KEY,
			});
			request['user'] = payload;
		} catch (error) {
			throw new TokenInvalidException();
		}
		return true;
	}
}
