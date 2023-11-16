"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Cpf_1 = require("../value-objects/Cpf");
const Password_1 = require("../value-objects/Password");
class User {
    constructor(input) {
        Object.assign(this, input);
    }
    static async create(input) {
        return new User({
            document: new Cpf_1.default(input.document),
            password: await Password_1.default.create(input.password),
            createdAt: new Date(),
            name: input.name,
            uuid: input.uuid,
            id: input.id,
        });
    }
    async validatePassword(password) {
        return this.password.validate(password);
    }
    static async buildExistingUser(input) {
        return new User({
            password: new Password_1.default(input.hash, input.salt),
            createdAt: input.createdAt,
            name: input.name,
            document: new Cpf_1.default(input.document),
            id: input.id,
            uuid: input.uuid,
        });
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map