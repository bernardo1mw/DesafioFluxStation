import RegisterRefuelUsecase from '../../../application/usecase/RegisterRefuelUsecase';
import GetRefuelHistoryUsecase from '../../../application/usecase/GetRefuelHistoryUsecase';
export declare class RefuelHistoryController {
    private readonly registerRefuelUsecase;
    private readonly getRefuelHistoryUsecase;
    constructor(registerRefuelUsecase: RegisterRefuelUsecase, getRefuelHistoryUsecase: GetRefuelHistoryUsecase);
    getAll(req: any): Promise<any>;
    registerRefuel(req: any, { licensePlate, fuel, refuelDate, quantity, }: {
        document: string;
        licensePlate: string;
        fuel: string;
        refuelDate: Date;
        quantity: number;
    }): Promise<any>;
}
