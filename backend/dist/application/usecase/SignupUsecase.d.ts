import { UuidGenerator } from '../../domain/crypto/Uuid';
import UserRepository from '../../domain/repositories/UserRepository';
export default class Signup {
    readonly uuidGenerator: UuidGenerator;
    readonly userRepository: UserRepository;
    constructor(uuidGenerator: UuidGenerator, userRepository: UserRepository);
    execute(input: Signup.Input): Promise<void>;
}
export declare namespace Signup {
    type Input = {
        document: string;
        password: string;
        name?: string;
    };
}
