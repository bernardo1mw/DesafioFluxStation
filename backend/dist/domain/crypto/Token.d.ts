import { User } from '../entities';
export interface TokenManager {
    verify(token: string, config?: TokenManager.Config): Promise<TokenManager.Params>;
    generate(user: User, expiresIn: number, issueDate: Date): Promise<TokenManager.Result>;
}
export declare namespace TokenManager {
    type Config = Partial<{
        secret: string;
        expiresIn: string;
        alg: string;
    }>;
    type Params = {
        id: string;
        uid: any;
        [key: string]: unknown;
    };
    type Result = string;
}
