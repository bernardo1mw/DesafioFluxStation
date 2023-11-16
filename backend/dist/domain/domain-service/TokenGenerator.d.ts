import { User } from '../entities';
export declare class TokenGenerator {
    readonly key: string;
    constructor(key: string);
    generate(user: User, expiresIn: number | string, issueDate: Date): string;
    verify(token: string, config?: TokenGenerator.Config): any;
}
export declare namespace TokenGenerator {
    type Config = Partial<{
        secret: string;
        expiresIn: string;
        alg: string;
    }>;
}
