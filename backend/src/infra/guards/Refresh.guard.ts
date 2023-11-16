import {
	CanActivate,
	ExecutionContext,
	Inject,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { SharedProviderEnum } from '../nestjs/ioc/providers/constants';
import { TokenGenerator } from '../../domain/domain-service';

@Injectable()
export class RefreshJwtGuard implements CanActivate {
	constructor(
		@Inject(SharedProviderEnum.TokenGenerator)
		private readonly tokenManager: TokenGenerator,
	) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		if (!token) {
			throw new UnauthorizedException();
		}
		try {
			const payload = await this.tokenManager.verify(token, {
				secret: process.env.JWT_REFRESH_SECRET_KEY,
			});
			request['user'] = payload;
		} catch {
			throw new UnauthorizedException();
		}

		return true;
	}

	private extractTokenFromHeader(request: Request) {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Refresh' ? token : undefined;
	}
}
