"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryProviders = void 0;
const repository_constants_1 = require("./repository.constants");
const UserRepository_1 = require("../../../../repositories/UserRepository");
const shared_constants_1 = require("../shared/shared.constants");
const RefuelHistoryRepository_1 = require("../../../../repositories/RefuelHistoryRepository");
const UserRepositoryProvider = {
    provide: repository_constants_1.RepositoryProviderEnum.UserRepository,
    useFactory: (connection) => new UserRepository_1.default(connection.getConnection()),
    inject: [shared_constants_1.SharedProviderEnum.DatabaseConnection],
};
const RefuelHistoryRepositoryProvider = {
    provide: repository_constants_1.RepositoryProviderEnum.RefuelHistoryRepository,
    useFactory: (connection) => new RefuelHistoryRepository_1.default(connection.getConnection()),
    inject: [shared_constants_1.SharedProviderEnum.DatabaseConnection],
};
exports.repositoryProviders = [
    UserRepositoryProvider,
    RefuelHistoryRepositoryProvider,
];
//# sourceMappingURL=repository.providers.js.map