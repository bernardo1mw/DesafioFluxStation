"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedProvider = void 0;
const common_1 = require("@nestjs/common");
const shared_constants_1 = require("./shared.constants");
const connection_adapter_1 = require("../../../../../database/connection.adapter");
const uuid_adapter_1 = require("../../../../crypto/uuid.adapter");
const TokenGenerator_1 = require("../../../../../domain/domain-service/TokenGenerator");
const config_1 = require("@nestjs/config");
const databaseProvider = {
    provide: shared_constants_1.SharedProviderEnum.DatabaseConnection,
    inject: [config_1.ConfigService],
    useFactory: async () => {
        try {
            const db = new connection_adapter_1.TypeOrmConnectionAdapter();
            await db.connect();
            return db;
        }
        catch (error) {
            throw new common_1.ServiceUnavailableException(error);
        }
    },
};
const uuidGeneratorProvider = {
    provide: shared_constants_1.SharedProviderEnum.UUIDGenerator,
    useClass: uuid_adapter_1.UUIDAdapter,
};
const tokenManagerProvider = {
    provide: shared_constants_1.SharedProviderEnum.TokenGenerator,
    useClass: TokenGenerator_1.TokenGenerator,
};
exports.sharedProvider = [
    databaseProvider,
    uuidGeneratorProvider,
    tokenManagerProvider,
];
//# sourceMappingURL=shared.providers.js.map