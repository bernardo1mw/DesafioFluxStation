"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsException = void 0;
const base_1 = require("./base");
class UserAlreadyExistsException extends base_1.AppException {
    constructor(message) {
        super(message ??
            'Ops! Parece que este documento já está cadastrado em nosso site', 409, 'UserAlreadyExistsException');
    }
}
exports.UserAlreadyExistsException = UserAlreadyExistsException;
//# sourceMappingURL=user-already-exists.exception.js.map