"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInvalidException = void 0;
const base_1 = require("./base");
class TokenInvalidException extends base_1.AppException {
    constructor() {
        super('Token invalid.', 401, 'TokenInvalidException');
    }
}
exports.TokenInvalidException = TokenInvalidException;
//# sourceMappingURL=invalid-token.exception.js.map