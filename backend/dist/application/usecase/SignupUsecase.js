"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../domain/entities");
const user_already_exists_exception_1 = require("../../domain/exceptions/user-already-exists.exception");
class Signup {
    constructor(uuidGenerator, userRepository) {
        this.uuidGenerator = uuidGenerator;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const { document, password, name } = input;
        const documentExists = await this.userRepository.countBy(document);
        if (documentExists)
            throw new user_already_exists_exception_1.UserAlreadyExistsException();
        const uuid = this.uuidGenerator.generate();
        const user = await entities_1.User.create({ document, password, name, uuid });
        await this.userRepository.save(user);
    }
}
exports.default = Signup;
//# sourceMappingURL=SignupUsecase.js.map