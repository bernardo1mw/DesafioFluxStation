"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HistoryRecord_1 = require("../../domain/entities/HistoryRecord");
class RegisterRefuelUsecase {
    constructor(refuelHistoryRepository) {
        this.refuelHistoryRepository = refuelHistoryRepository;
    }
    async execute(input) {
        const { document, licensePlate, fuel, refuelDate, quantity } = input;
        const record = await HistoryRecord_1.HistoryRecord.create({
            document,
            licensePlate,
            fuel,
            refuelDate,
            quantity,
        });
        await this.refuelHistoryRepository.save(record);
    }
}
exports.default = RegisterRefuelUsecase;
//# sourceMappingURL=RegisterRefuelUsecase.js.map