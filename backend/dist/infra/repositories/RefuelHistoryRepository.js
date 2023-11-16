"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapping_1 = require("../../database/mapping");
const entities_1 = require("../../domain/entities");
class RefuelHistoryRepositoryTypeORMAdapter {
    constructor(connection) {
        this.connection = connection;
        this.repository = this.connection.getRepository(mapping_1.RefuelHistoryEntity);
    }
    async save(record) {
        const entity = this.repository.create({
            id: record.id,
            driverDocument: record.document.getValue(),
            vehiclePlate: record.licensePlate,
            fuel: record.fuel,
            quantity: record.quantity,
            refuelDate: record.refuelDate,
        });
        await this.repository.save(entity);
    }
    async getAll(document) {
        const records = await this.repository.findBy({
            driverDocument: document,
        });
        const entities = [];
        records.map(async (record) => {
            const entity = await entities_1.HistoryRecord.create({
                id: record.id,
                document: record.driverDocument,
                fuel: record.fuel,
                licensePlate: record.vehiclePlate,
                quantity: record.quantity,
                refuelDate: record.refuelDate,
            });
            entities.push(entity);
        });
        return entities;
    }
}
exports.default = RefuelHistoryRepositoryTypeORMAdapter;
//# sourceMappingURL=RefuelHistoryRepository.js.map