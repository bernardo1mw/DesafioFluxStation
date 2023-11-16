import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';
export default class GetRefuelHistoryUsecase {
    readonly refuelHistoryRepository: RefuelHistoryRepository;
    constructor(refuelHistoryRepository: RefuelHistoryRepository);
    execute(input: GetRefuelHistoryUsecase.Input): Promise<GetRefuelHistoryUsecase.Output[]>;
}
export declare namespace GetRefuelHistoryUsecase {
    type Input = {
        document: string;
    };
    type Output = {
        id: number;
        licensePlate: string;
        fuel: string;
        refuelDate: Date;
        quantity: number;
        price: number;
        total: number;
    };
}
