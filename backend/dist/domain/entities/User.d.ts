import Cpf from '../value-objects/Cpf';
import Password from '../value-objects/Password';
export declare class User {
    id: number;
    uuid: string;
    document: Cpf;
    createdAt: Date;
    name: string;
    password: Password;
    private constructor();
    static create(input: Partial<User.CreateInput>): Promise<User>;
    validatePassword(password: string): Promise<boolean>;
    static buildExistingUser(input: Partial<User.BuildInput>): Promise<User>;
}
export declare namespace User {
    type Input = {
        password: Password;
        createdAt: Date;
        name: string;
        id: number;
        uuid: string;
        document: Cpf;
    };
    type CreateInput = {
        password: string;
        createdAt: Date;
        name: string;
        id: number;
        uuid: string;
        document: string;
    };
    type BuildInput = {
        hash: string;
        salt: string;
        document: string;
        uuid: string;
        createdAt: Date;
        name: string;
        id: number;
    };
}
