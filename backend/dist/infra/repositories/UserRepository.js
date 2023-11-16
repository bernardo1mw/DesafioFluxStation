"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapping_1 = require("../../database/mapping");
const entities_1 = require("../../domain/entities");
const user_not_found_exception_1 = require("../../domain/exceptions/user-not-found.exception");
class UserRepositoryTypeORMAdapter {
    constructor(connection) {
        this.connection = connection;
        this.repository = this.connection.getRepository(mapping_1.UserEntity);
    }
    async findById(id) {
        const entity = await this.repository.findOneBy({ id });
        if (!entity)
            throw new user_not_found_exception_1.UserNotFoundException();
        const user = await entities_1.User.buildExistingUser({
            document: entity.document,
            hash: entity.password,
            salt: entity.salt,
            name: entity.name,
            id: entity.id,
        });
        return user;
    }
    async countBy(document) {
        const count = this.repository.countBy({ document });
        return count;
    }
    async save(user) {
        const entity = this.repository.create({
            id: user.id,
            name: user.name,
            password: user.password.value,
            document: user.document.getValue(),
            salt: user.password.salt,
        });
        await this.repository.save(entity);
    }
    async findByDocument(document) {
        const entity = await this.repository.findOneBy({ document });
        if (!entity)
            throw new user_not_found_exception_1.UserNotFoundException();
        const user = await entities_1.User.buildExistingUser({
            document,
            hash: entity.password,
            salt: entity.salt,
            name: entity.name,
            id: entity.id,
        });
        return user;
    }
}
exports.default = UserRepositoryTypeORMAdapter;
//# sourceMappingURL=UserRepository.js.map