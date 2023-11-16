"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = void 0;
const base_1 = require("./base");
class InternalServerErrorException extends base_1.AppException {
    constructor() {
        super('Internal server error.', 500, 'InternalServerErrorException');
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
//# sourceMappingURL=internal-server-error.exception.js.map