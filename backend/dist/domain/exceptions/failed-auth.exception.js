"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedAuthenticationException = void 0;
const base_1 = require("./base");
class FailedAuthenticationException extends base_1.AppException {
    constructor() {
        super('Authentication failed.', 401, 'FailedAuthenticationException');
    }
}
exports.FailedAuthenticationException = FailedAuthenticationException;
//# sourceMappingURL=failed-auth.exception.js.map