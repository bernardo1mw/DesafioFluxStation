"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const failed_auth_exception_1 = require("../../domain/exceptions/failed-auth.exception");
class Login {
    constructor(tokenManager, userRepository) {
        this.tokenManager = tokenManager;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const { document, password, date } = input;
        const user = await this.userRepository.findByDocument(document);
        if (!user)
            throw new failed_auth_exception_1.FailedAuthenticationException();
        const isValidPassword = await user.validatePassword(password);
        if (!isValidPassword)
            throw new failed_auth_exception_1.FailedAuthenticationException();
        const tokenIssueDate = !!date ? date : new Date();
        const tokenExpiresIn = new Date().setTime(tokenIssueDate.getTime() + 20000);
        const token = this.tokenManager.generate(user, process.env.EXPIRE_TIME, tokenIssueDate);
        const refreshToken = this.tokenManager.generate(user, process.env.REFRESH_EXPIRE_TIME, tokenIssueDate);
        return {
            user: {
                id: user.id,
                name: user.name,
                document: user.document.getValue(),
            },
            backendTokens: { token, refreshToken, expiresIn: tokenExpiresIn },
        };
    }
}
exports.default = Login;
//# sourceMappingURL=LoginUsecase.js.map