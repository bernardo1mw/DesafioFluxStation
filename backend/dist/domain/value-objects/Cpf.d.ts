export default class Cpf {
    private value;
    constructor(cpf: string);
    validate(cpf: string): boolean;
    clean(cpf: string): string;
    isInvalidLength(cpf: string): boolean;
    allDigitsTheSame(cpf: string): boolean;
    calculateDigit(cpf: string, factor: number): number;
    extractDigit(cpf: string): string;
    getValue(): string;
}
