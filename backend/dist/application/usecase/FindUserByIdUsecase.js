"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindUserByIdUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        const { id } = input;
        const user = await this.userRepository.findById(id);
        return { id: user.id, name: user.name, document: user.document.getValue() };
    }
}
exports.default = FindUserByIdUsecase;
//# sourceMappingURL=FindUserByIdUsecase.js.map