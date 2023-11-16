import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';
export default class RegisterRefuelUsecase {
    readonly refuelHistoryRepository: RefuelHistoryRepository;
    constructor(refuelHistoryRepository: RefuelHistoryRepository);
    execute(input: Input): Promise<void>;
}
export type Input = {
    document: string;
    licensePlate: string;
    fuel: string;
    refuelDate: Date;
    quantity: number;
};
