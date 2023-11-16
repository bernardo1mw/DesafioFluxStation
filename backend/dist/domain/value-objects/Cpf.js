"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_cpf_exception_1 = require("../exceptions/invalid-cpf.exception");
class Cpf {
    constructor(cpf) {
        if (!this.validate(cpf))
            throw new invalid_cpf_exception_1.InvalidCpfException();
        this.value = cpf;
    }
    validate(cpf) {
        if (!cpf)
            return false;
        cpf = this.clean(cpf);
        if (this.isInvalidLength(cpf))
            return false;
        if (this.allDigitsTheSame(cpf)) {
            const dg1 = this.calculateDigit(cpf, 10);
            const dg2 = this.calculateDigit(cpf, 11);
            const checkDigit = this.extractDigit(cpf);
            const calculatedDigit = `${dg1}${dg2}`;
            return checkDigit === calculatedDigit;
        }
        else
            return false;
    }
    clean(cpf) {
        return cpf.replace(/\D/g, '');
    }
    isInvalidLength(cpf) {
        return cpf.length !== 11;
    }
    allDigitsTheSame(cpf) {
        return !cpf.split('').every((c) => c === cpf[0]);
    }
    calculateDigit(cpf, factor) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1)
                total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return rest < 2 ? 0 : 11 - rest;
    }
    extractDigit(cpf) {
        return cpf.substring(cpf.length - 2, cpf.length);
    }
    getValue() {
        return this.value;
    }
}
exports.default = Cpf;
//# sourceMappingURL=Cpf.js.map