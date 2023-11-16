"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Password {
    constructor(value, salt) {
        this.value = value;
        this.salt = salt;
    }
    getValue() {
        return this.value;
    }
    static create(password, salt) {
        const generatedSalt = salt || (0, crypto_1.randomBytes)(20).toString('hex');
        return new Promise((resolve) => {
            (0, crypto_1.pbkdf2)(password, generatedSalt, 100, 64, 'sha512', (error, value) => {
                resolve(new Password(value.toString('hex'), generatedSalt));
            });
        });
    }
    async validate(password) {
        return new Promise((resolve) => {
            (0, crypto_1.pbkdf2)(password, this.salt, 100, 64, 'sha512', (error, value) => {
                resolve(this.value === value.toString('hex'));
            });
        });
    }
}
exports.default = Password;
//# sourceMappingURL=Password.js.map