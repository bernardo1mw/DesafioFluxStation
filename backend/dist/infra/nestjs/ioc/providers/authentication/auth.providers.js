"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authExports = exports.authProviders = void 0;
const auth_constants_1 = require("./auth.constants");
const SignupUsecase_1 = require("../../../../../application/usecase/SignupUsecase");
const repository_constants_1 = require("../repository/repository.constants");
const LoginUsecase_1 = require("../../../../../application/usecase/LoginUsecase");
const shared_constants_1 = require("../shared/shared.constants");
const RefreshTokenUsecase_1 = require("../../../../../application/usecase/RefreshTokenUsecase");
const signupUsecaseProvider = {
    provide: auth_constants_1.AuthProviderEnum.SignupUsecase,
    useFactory: (uuidGenerator, userRepository) => new SignupUsecase_1.default(uuidGenerator, userRepository),
    inject: [
        shared_constants_1.SharedProviderEnum.UUIDGenerator,
        repository_constants_1.RepositoryProviderEnum.UserRepository,
    ],
};
const loginUsecaseProvider = {
    provide: auth_constants_1.AuthProviderEnum.LoginUsecase,
    useFactory: (tokenGenerator, userRepository) => new LoginUsecase_1.default(tokenGenerator, userRepository),
    inject: [
        shared_constants_1.SharedProviderEnum.TokenGenerator,
        repository_constants_1.RepositoryProviderEnum.UserRepository,
    ],
};
const refreshTokenUsecaseProvider = {
    provide: auth_constants_1.AuthProviderEnum.RefreshTokenUsecase,
    useFactory: (tokenGenerator, userRepository) => new RefreshTokenUsecase_1.default(tokenGenerator, userRepository),
    inject: [
        shared_constants_1.SharedProviderEnum.TokenGenerator,
        repository_constants_1.RepositoryProviderEnum.UserRepository,
    ],
};
exports.authProviders = [
    signupUsecaseProvider,
    loginUsecaseProvider,
    refreshTokenUsecaseProvider,
];
exports.authExports = [
    signupUsecaseProvider,
    loginUsecaseProvider,
    refreshTokenUsecaseProvider,
];
//# sourceMappingURL=auth.providers.js.map