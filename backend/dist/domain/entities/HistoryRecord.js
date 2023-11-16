"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRecord = void 0;
const Cpf_1 = require("../value-objects/Cpf");
class HistoryRecord {
    constructor(input) {
        Object.assign(this, input);
    }
    static async create(input) {
        return new HistoryRecord({
            id: input.id,
            document: new Cpf_1.default(input.document),
            licensePlate: input.licensePlate,
            fuel: input.fuel,
            refuelDate: input.refuelDate,
            quantity: input.quantity,
        });
    }
    static async buildExistingRecord(input) {
        return new HistoryRecord({
            id: input.id,
            document: new Cpf_1.default(input.document),
            licensePlate: input.licensePlate,
            fuel: input.fuel,
            refuelDate: input.refuelDate,
            quantity: input.quantity,
        });
    }
}
exports.HistoryRecord = HistoryRecord;
//# sourceMappingURL=HistoryRecord.js.map