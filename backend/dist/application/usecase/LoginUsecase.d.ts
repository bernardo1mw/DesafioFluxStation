import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
import UserRepository from '../../domain/repositories/UserRepository';
export default class Login {
    readonly tokenManager: TokenGenerator;
    readonly userRepository: UserRepository;
    constructor(tokenManager: TokenGenerator, userRepository: UserRepository);
    execute(input: Login.Input): Promise<Login.Output>;
}
export declare namespace Login {
    type Input = {
        document: string;
        password: string;
        date?: Date;
    };
    type Output = {
        user: UserOutput;
        backendTokens: TokenOutput;
    };
    type UserOutput = {
        id: number;
        name: string;
        document: string;
    };
    type TokenOutput = {
        token: string;
        refreshToken: string;
        expiresIn: number;
    };
}
