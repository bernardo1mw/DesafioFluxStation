import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
import UserRepository from '../../domain/repositories/UserRepository';
export default class RefreshTokenUsecase {
    readonly tokenManager: TokenGenerator;
    readonly userRepository: UserRepository;
    constructor(tokenManager: TokenGenerator, userRepository: UserRepository);
    execute(input: RefreshTokenUsecase.Input): Promise<RefreshTokenUsecase.Output>;
}
export declare namespace RefreshTokenUsecase {
    type Input = {
        document: string;
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
