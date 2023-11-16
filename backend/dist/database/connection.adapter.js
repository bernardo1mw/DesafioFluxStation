"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConnectionAdapter = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
class TypeOrmConnectionAdapter {
    isInitialized() {
        return this.dataSource?.isInitialized;
    }
    async connect() {
        try {
            const connection = new typeorm_1.DataSource({
                type: 'postgres',
                host: configService.getOrThrow('POSTGRES_HOST'),
                port: configService.getOrThrow('POSTGRES_PORT'),
                database: configService.getOrThrow('POSTGRES_DB'),
                username: configService.getOrThrow('POSTGRES_USER'),
                password: configService.getOrThrow('POSTGRES_PASSWORD'),
                migrations: ['migrations/**'],
                entities: [`${__dirname}/mapping/*.{js,ts}`],
            });
            this.dataSource = await connection.initialize();
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to connect to database');
        }
    }
    getConnection() {
        return this.dataSource;
    }
}
exports.TypeOrmConnectionAdapter = TypeOrmConnectionAdapter;
//# sourceMappingURL=connection.adapter.js.map