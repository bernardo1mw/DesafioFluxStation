import { RefuelHistoryEntity } from './refuelHistory';
export declare class UserEntity {
    id: number;
    name: string;
    password: string;
    document: string;
    salt: string;
    refuelHistories: RefuelHistoryEntity[];
}
