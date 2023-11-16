import FindUserByIdUsecase from '../../../application/usecase/FindUserByIdUsecase';
export declare class UserController {
    private readonly findUserByIdUsecase;
    constructor(findUserByIdUsecase: FindUserByIdUsecase);
    findById(id: number): Promise<any>;
}
