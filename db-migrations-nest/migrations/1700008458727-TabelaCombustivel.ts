import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TabelaCombustivel1700008458727 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'fuel',
				columns: [
					{
						name: 'name',
						type: 'varchar',
						isPrimary: true,
					},
					{
						name: 'price',
						type: 'numeric',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'stock',
						type: 'numeric',
						isUnique: true,
						isNullable: false,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('fuel');
	}
}
