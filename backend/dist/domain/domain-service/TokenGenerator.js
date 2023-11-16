"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGenerator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class TokenGenerator {
    constructor(key) {
        this.key = key;
    }
    generate(user, expiresIn, issueDate) {
        return (0, jsonwebtoken_1.sign)({
            document: user.document.getValue(),
            iat: issueDate.getTime(),
            expiresIn: expiresIn,
        }, process.env.JWT_SECRET_KEY);
    }
    verify(token, config) {
        return (0, jsonwebtoken_1.verify)(token, config.secret || process.env.JWT_SECRET_KEY);
    }
}
exports.TokenGenerator = TokenGenerator;
//# sourceMappingURL=TokenGenerator.js.map