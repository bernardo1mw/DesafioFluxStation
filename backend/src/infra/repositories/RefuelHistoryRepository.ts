import { DataSource, Repository } from 'typeorm';
import UserRepository from '../../domain/repositories/UserRepository';
import { FuelEntity, RefuelHistoryEntity } from '../../database/mapping';
import { HistoryRecord, User } from '../../domain/entities';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import RefuelHistoryRepository from '../../domain/repositories/RefuelHistoryRepository';

export default class RefuelHistoryRepositoryTypeORMAdapter
	implements RefuelHistoryRepository
{
	repository: Repository<RefuelHistoryEntity>;

	constructor(private readonly connection: DataSource) {
		this.repository = this.connection.getRepository(RefuelHistoryEntity);
	}
	async save(record: HistoryRecord): Promise<void> {
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
	async getAll(document: string): Promise<HistoryRecord[]> {
		const records = await this.repository.findBy({
			driverDocument: document,
		});
		const entities: HistoryRecord[] = [];
		records.map(async (record) => {
			const entity = await HistoryRecord.create({
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
