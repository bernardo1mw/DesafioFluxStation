"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refuelHistoryExports = exports.refuelHistoryProviders = void 0;
const repository_constants_1 = require("../repository/repository.constants");
const refuel_history_constants_1 = require("./refuel-history.constants");
const RegisterRefuelUsecase_1 = require("../../../../../application/usecase/RegisterRefuelUsecase");
const GetRefuelHistoryUsecase_1 = require("../../../../../application/usecase/GetRefuelHistoryUsecase");
const registerRefuelUsecaseProvider = {
    provide: refuel_history_constants_1.RefuelHistoryProviderEnum.RegisterRefuelUsecase,
    useFactory: (refuelHistoryRepository) => new RegisterRefuelUsecase_1.default(refuelHistoryRepository),
    inject: [repository_constants_1.RepositoryProviderEnum.RefuelHistoryRepository],
};
const getRefuelHistoryUsecaseProvider = {
    provide: refuel_history_constants_1.RefuelHistoryProviderEnum.GetRefuelHistoryUsecase,
    useFactory: (refuelHistoryRepository) => new GetRefuelHistoryUsecase_1.default(refuelHistoryRepository),
    inject: [repository_constants_1.RepositoryProviderEnum.RefuelHistoryRepository],
};
exports.refuelHistoryProviders = [
    registerRefuelUsecaseProvider,
    getRefuelHistoryUsecaseProvider,
];
exports.refuelHistoryExports = [
    registerRefuelUsecaseProvider,
    getRefuelHistoryUsecaseProvider,
];
//# sourceMappingURL=refuel-history.providers.js.map