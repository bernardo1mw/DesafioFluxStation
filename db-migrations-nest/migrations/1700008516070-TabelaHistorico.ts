import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class TabelaHistorico1700008516070 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'refuel_history',
				columns: [
					{
						name: 'id',
						type: 'serial',
						isPrimary: true,
					},
					{
						name: 'vehicle_plate',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'driver_document',
						type: 'varchar',
						isUnique: false,
						isNullable: false,
					},
					{
						name: 'fuel',
						type: 'varchar',
						isUnique: false,
						isNullable: false,
					},
					{
						name: 'quantity',
						type: 'numeric',
						isUnique: false,
						isNullable: false,
					},
					{
						name: 'refuel_date',
						type: 'timestamp',
					},
				],
			}),
		);
		// await queryRunner.createForeignKey(
		// 	'refuel_history',
		// 	new TableForeignKey({
		// 		columnNames: ['vehicle_plate'],
		// 		referencedTableName: 'vehicle',
		// 		referencedColumnNames: ['license_plate'],
		// 	}),
		// );
		// await queryRunner.createForeignKey(
		// 	'refuel_history',
		// 	new TableForeignKey({
		// 		columnNames: ['driver_document'],
		// 		referencedTableName: 'driver',
		// 		referencedColumnNames: ['document'],
		// 	}),
		// );
		// await queryRunner.createForeignKey(
		// 	'refuel_history',
		// 	new TableForeignKey({
		// 		columnNames: ['fuel'],
		// 		referencedTableName: 'fuel',
		// 		referencedColumnNames: ['name'],
		// 	}),
		// );
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('refuel_history');
	}
}
