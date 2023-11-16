"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const failed_auth_exception_1 = require("../../domain/exceptions/failed-auth.exception");
const EXPIRE_TIME = '20s';
const REFRESH_EXPIRE_TIME = '7d';
class RefreshTokenUsecase {
    constructor(tokenManager, userRepository) {
        this.tokenManager = tokenManager;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const { document } = input;
        const user = await this.userRepository.findByDocument(document);
        if (!user)
            throw new failed_auth_exception_1.FailedAuthenticationException();
        const tokenIssueDate = new Date();
        const tokenExpiresIn = new Date().setTime(tokenIssueDate.getTime() + 20000);
        const token = this.tokenManager.generate(user, EXPIRE_TIME, tokenIssueDate);
        const refreshToken = this.tokenManager.generate(user, REFRESH_EXPIRE_TIME, tokenIssueDate);
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
exports.default = RefreshTokenUsecase;
//# sourceMappingURL=RefreshTokenUsecase.js.map