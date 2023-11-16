"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fuel_enum_1 = require("../../domain/enums/fuel.enum");
class GetRefuelHistoryUsecase {
    constructor(refuelHistoryRepository) {
        this.refuelHistoryRepository = refuelHistoryRepository;
    }
    async execute(input) {
        const { document } = input;
        const records = await this.refuelHistoryRepository.getAll(document);
        return records.map((record) => {
            const fuelPrice = fuel_enum_1.FuelEnum.Fuels[record.fuel.split(' ').join('_')];
            const total = fuelPrice * record.quantity;
            return {
                id: record.id,
                document: document,
                licensePlate: record.licensePlate,
                fuel: record.fuel,
                refuelDate: record.refuelDate,
                quantity: record.quantity,
                price: fuelPrice,
                total: total,
            };
        });
    }
}
exports.default = GetRefuelHistoryUsecase;
//# sourceMappingURL=GetRefuelHistoryUsecase.js.map