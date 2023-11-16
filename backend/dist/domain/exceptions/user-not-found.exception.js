"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const base_1 = require("./base");
class UserNotFoundException extends base_1.AppException {
    constructor() {
        super('User not found.', 404, 'UserNotFoundException');
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=user-not-found.exception.js.map