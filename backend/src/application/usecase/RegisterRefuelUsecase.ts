import { HistoryRecord } from '../../domain/entities/HistoryRecord';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';
import UserRepository from '../../domain/repositories/UserRepository';

export default class RegisterRefuelUsecase {
	constructor(readonly refuelHistoryRepository: RefuelHistoryRepository) {}
	async execute(input: Input): Promise<void> {
		const { document, licensePlate, fuel, refuelDate, quantity } = input;

		const record = await HistoryRecord.create({
			document,
			licensePlate,
			fuel,
			refuelDate,
			quantity,
		});
		await this.refuelHistoryRepository.save(record);
	}
}

export type Input = {
	document: string;
	licensePlate: string;
	fuel: string;
	refuelDate: Date;
	quantity: number;
};
