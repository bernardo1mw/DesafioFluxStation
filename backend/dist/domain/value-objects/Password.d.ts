export default class Password {
    readonly value: string;
    readonly salt: string;
    constructor(value: string, salt: string);
    getValue(): string;
    static create(password: string, salt?: string): Promise<Password>;
    validate(password: string): Promise<boolean>;
}
