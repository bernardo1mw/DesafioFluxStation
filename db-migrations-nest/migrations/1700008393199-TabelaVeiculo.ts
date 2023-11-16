import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TabelaVeiculo1700008393199 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'vehicle',
				columns: [
					{
						name: 'id',
						type: 'serial',
						isPrimary: true,
					},
					{
						name: 'brand',
						type: 'varchar',
						isUnique: false,
						isNullable: false,
						length: '255',
					},
					{
						name: 'model',
						type: 'varchar',
						isNullable: false,
						length: '255',
					},
					{
						name: 'license_plate',
						type: 'varchar',
						isUnique: true,
						isNullable: false,
						length: '255',
					},
					{
						name: 'driver_document',
						type: 'varchar',
						length: '255',
						isUnique: false,
						isNullable: false,
					},
					{
						name: 'refuel_date',
						type: 'timestamp',
						isUnique: false,
						isNullable: false,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('vehicle');
	}
}
