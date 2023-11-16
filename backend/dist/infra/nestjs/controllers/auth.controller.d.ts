import Login from '../../../application/usecase/LoginUsecase';
import Signup from '../../../application/usecase/SignupUsecase';
import RefreshTokenUsecase from '../../../application/usecase/RefreshTokenUsecase';
export declare class AuthController {
    private readonly loginUsecase;
    private readonly signupUsecase;
    private readonly refreshTokenUsecase;
    constructor(loginUsecase: Login, signupUsecase: Signup, refreshTokenUsecase: RefreshTokenUsecase);
    login({ document, password }: {
        document: any;
        password: any;
    }): Promise<any>;
    signup({ name, document, password }: {
        name: any;
        document: any;
        password: any;
    }): Promise<any>;
    refreshToken(req: any): Promise<any>;
}
