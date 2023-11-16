import { HistoryRecord } from '../entities';
export default interface RefuelHistoryRepository {
    getAll(): Promise<HistoryRecord[]>;
}
