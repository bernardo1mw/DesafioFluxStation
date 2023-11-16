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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../ioc/providers/authentication/auth.constants");
const LoginUsecase_1 = require("../../../application/usecase/LoginUsecase");
const SignupUsecase_1 = require("../../../application/usecase/SignupUsecase");
const Refresh_guard_1 = require("../../guards/Refresh.guard");
const RefreshTokenUsecase_1 = require("../../../application/usecase/RefreshTokenUsecase");
let AuthController = class AuthController {
    constructor(loginUsecase, signupUsecase, refreshTokenUsecase) {
        this.loginUsecase = loginUsecase;
        this.signupUsecase = signupUsecase;
        this.refreshTokenUsecase = refreshTokenUsecase;
    }
    async login({ document, password }) {
        return this.loginUsecase.execute({
            document,
            password,
        });
    }
    async signup({ name, document, password }) {
        return this.signupUsecase.execute({
            name,
            document,
            password,
        });
    }
    async refreshToken(req) {
        return await this.refreshTokenUsecase.execute({
            document: req.user.document,
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.UseGuards)(Refresh_guard_1.RefreshJwtGuard),
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(0, (0, common_1.Inject)(auth_constants_1.AuthProviderEnum.LoginUsecase)),
    __param(1, (0, common_1.Inject)(auth_constants_1.AuthProviderEnum.SignupUsecase)),
    __param(2, (0, common_1.Inject)(auth_constants_1.AuthProviderEnum.RefreshTokenUsecase)),
    __metadata("design:paramtypes", [LoginUsecase_1.default,
        SignupUsecase_1.default,
        RefreshTokenUsecase_1.default])
], AuthController);
//# sourceMappingURL=auth.controller.js.map