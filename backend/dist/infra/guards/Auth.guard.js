"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const shared_constants_1 = require("../nestjs/ioc/providers/shared/shared.constants");
const TokenGenerator_1 = require("../../domain/domain-service/TokenGenerator");
const invalid_token_exception_1 = require("../../domain/exceptions/invalid-token.exception");
let AuthGuard = class AuthGuard {
    constructor(tokenManager) {
        this.tokenManager = tokenManager;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const token = request.headers[`authorization`].replace(/^Bearer\s/, '');
            const payload = await this.tokenManager.verify(token, {
                secret: process.env.JWT_SECRET_KEY,
            });
            request['user'] = payload;
        }
        catch (error) {
            throw new invalid_token_exception_1.TokenInvalidException();
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(shared_constants_1.SharedProviderEnum.TokenGenerator)),
    __metadata("design:paramtypes", [TokenGenerator_1.TokenGenerator])
], AuthGuard);
//# sourceMappingURL=Auth.guard.js.map