import { HistoryRecord } from '../entities';
export default interface RefuelHistoryRepository {
    save(record: HistoryRecord): Promise<void>;
    getAll(document: string): Promise<HistoryRecord[]>;
}
