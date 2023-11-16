"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCpfException = void 0;
const base_1 = require("./base");
class InvalidCpfException extends base_1.AppException {
    constructor() {
        super('Invalid CPF.', 404, 'InvalidCpfException');
    }
}
exports.InvalidCpfException = InvalidCpfException;
//# sourceMappingURL=invalid-cpf.exception.js.map