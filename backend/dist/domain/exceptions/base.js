"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
class AppException extends Error {
    constructor(customMessage, statusCode = 500, statusText = 'InternalServerErrorException', details) {
        super();
        this.customMessage = customMessage;
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.details = details;
    }
}
exports.AppException = AppException;
//# sourceMappingURL=base.js.map