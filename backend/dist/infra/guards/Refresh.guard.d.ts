import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenGenerator } from '../../domain/domain-service';
export declare class RefreshJwtGuard implements CanActivate {
    private readonly tokenManager;
    constructor(tokenManager: TokenGenerator);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
