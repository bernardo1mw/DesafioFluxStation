"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExports = exports.userProviders = void 0;
const repository_constants_1 = require("../repository/repository.constants");
const user_constants_1 = require("./user.constants");
const FindUserByIdUsecase_1 = require("../../../../../application/usecase/FindUserByIdUsecase");
const findUserByIdUsecaseProvider = {
    provide: user_constants_1.UserProviderEnum.FindUserByIdUsecase,
    useFactory: (userRepository) => new FindUserByIdUsecase_1.default(userRepository),
    inject: [repository_constants_1.RepositoryProviderEnum.UserRepository],
};
exports.userProviders = [findUserByIdUsecaseProvider];
exports.userExports = [findUserByIdUsecaseProvider];
//# sourceMappingURL=user.providers.js.map