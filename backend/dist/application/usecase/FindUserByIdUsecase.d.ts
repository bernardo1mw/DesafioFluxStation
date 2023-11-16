import UserRepository from '../../domain/repositories/UserRepository';
export default class FindUserByIdUsecase {
    readonly userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    execute(input: FindUserByIdUsecase.Input): Promise<FindUserByIdUsecase.Output>;
}
export declare namespace FindUserByIdUsecase {
    type Input = {
        id: number;
    };
    type Output = {
        id: number;
        name: string;
        document: string;
    };
}
