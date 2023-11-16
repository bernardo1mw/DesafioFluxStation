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
exports.RefreshJwtGuard = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../nestjs/ioc/providers/constants");
const domain_service_1 = require("../../domain/domain-service");
let RefreshJwtGuard = class RefreshJwtGuard {
    constructor(tokenManager) {
        this.tokenManager = tokenManager;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.tokenManager.verify(token, {
                secret: process.env.JWT_REFRESH_SECRET_KEY,
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Refresh' ? token : undefined;
    }
};
exports.RefreshJwtGuard = RefreshJwtGuard;
exports.RefreshJwtGuard = RefreshJwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.SharedProviderEnum.TokenGenerator)),
    __metadata("design:paramtypes", [domain_service_1.TokenGenerator])
], RefreshJwtGuard);
//# sourceMappingURL=Refresh.guard.js.map