import { DataSource } from 'typeorm';
import { DatabaseConnection } from './connection';
export declare class TypeOrmConnectionAdapter implements DatabaseConnection<DataSource> {
    private dataSource;
    isInitialized(): boolean;
    connect(): Promise<void>;
    getConnection(): DataSource;
}
