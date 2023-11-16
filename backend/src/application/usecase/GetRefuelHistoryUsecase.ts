import { HistoryRecord } from '../../domain/entities/HistoryRecord';
import { FuelEnum } from '../../domain/enums/fuel.enum';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';
import UserRepository from '../../domain/repositories/UserRepository';

export default class GetRefuelHistoryUsecase {
	constructor(readonly refuelHistoryRepository: RefuelHistoryRepository) {}
	async execute(
		input: GetRefuelHistoryUsecase.Input,
	): Promise<GetRefuelHistoryUsecase.Output[]> {
		const { document } = input;
		const records = await this.refuelHistoryRepository.getAll(document);

		return records.map((record) => {
			const fuelPrice = FuelEnum.Fuels[record.fuel.split(' ').join('_')];
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

export namespace GetRefuelHistoryUsecase {
	export type Input = {
		document: string;
	};
	export type Output = {
		id: number;
		licensePlate: string;
		fuel: string;
		refuelDate: Date;
		quantity: number;
		price: number;
		total: number;
	};
}
