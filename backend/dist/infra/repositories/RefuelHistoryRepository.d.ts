import { DataSource, Repository } from 'typeorm';
import { RefuelHistoryEntity } from '../../database/mapping';
import { HistoryRecord } from '../../domain/entities';
import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';
export default class RefuelHistoryRepositoryTypeORMAdapter implements RefuelHistoryRepository {
    private readonly connection;
    repository: Repository<RefuelHistoryEntity>;
    constructor(connection: DataSource);
    save(record: HistoryRecord): Promise<void>;
    getAll(document: string): Promise<HistoryRecord[]>;
}
