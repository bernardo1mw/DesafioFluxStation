import Cpf from '../value-objects/Cpf';
import Password from '../value-objects/Password';

export class HistoryRecord {
	id: number;
	document: Cpf;
	licensePlate: string;
	fuel: string;
	refuelDate: Date;
	quantity: number;

	private constructor(input: Partial<HistoryRecord.Input>) {
		Object.assign(this, input);
	}

	static async create(
		input: Partial<HistoryRecord.CreateInput>,
	): Promise<HistoryRecord> {
		return new HistoryRecord({
			id: input.id,
			document: new Cpf(input.document),
			licensePlate: input.licensePlate,
			fuel: input.fuel,
			refuelDate: input.refuelDate,
			quantity: input.quantity,
		});
	}

	static async buildExistingRecord(
		input: Partial<HistoryRecord.BuildInput>,
	): Promise<HistoryRecord> {
		return new HistoryRecord({
			id: input.id,
			document: new Cpf(input.document),
			licensePlate: input.licensePlate,
			fuel: input.fuel,
			refuelDate: input.refuelDate,
			quantity: input.quantity,
		});
	}
}

export namespace HistoryRecord {
	export type Input = {
		id: number;
		document: Cpf;
		licensePlate: string;
		fuel: string;
		refuelDate: Date;
		quantity: number;
	};
	export type CreateInput = {
		id: number;
		document: string;
		licensePlate: string;
		fuel: string;
		refuelDate: Date;
		quantity: number;
	};
	export type BuildInput = {
		id: number;
		document: string;
		licensePlate: string;
		fuel: string;
		refuelDate: Date;
		quantity: number;
	};
}
