import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
export declare class AuthGuard implements CanActivate {
    private readonly tokenManager;
    constructor(tokenManager: TokenGenerator);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
