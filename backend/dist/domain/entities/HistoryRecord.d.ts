import Cpf from '../value-objects/Cpf';
export declare class HistoryRecord {
    id: number;
    document: Cpf;
    licensePlate: string;
    fuel: string;
    refuelDate: Date;
    quantity: number;
    private constructor();
    static create(input: Partial<HistoryRecord.CreateInput>): Promise<HistoryRecord>;
    static buildExistingRecord(input: Partial<HistoryRecord.BuildInput>): Promise<HistoryRecord>;
}
export declare namespace HistoryRecord {
    type Input = {
        id: number;
        document: Cpf;
        licensePlate: string;
        fuel: string;
        refuelDate: Date;
        quantity: number;
    };
    type CreateInput = {
        id: number;
        document: string;
        licensePlate: string;
        fuel: string;
        refuelDate: Date;
        quantity: number;
    };
    type BuildInput = {
        id: number;
        document: string;
        licensePlate: string;
        fuel: string;
        refuelDate: Date;
        quantity: number;
    };
}
