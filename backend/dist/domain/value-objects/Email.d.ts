export default class Email {
    private value;
    constructor(email: string);
    getValue(): string;
    isValid(email: string): RegExpMatchArray;
}
