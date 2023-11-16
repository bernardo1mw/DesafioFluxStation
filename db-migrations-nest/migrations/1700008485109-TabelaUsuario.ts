import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TabelaUsuario1700008485109 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'user',
				columns: [
					{
						name: 'id',
						type: 'serial',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar',
						isUnique: false,
						isNullable: false,
						length: '255',
					},
					{
						name: 'password',
						type: 'varchar',
						isUnique: false,
						isNullable: false,
						length: '255',
					},
					{
						name: 'document',
						type: 'varchar',
						length: '255',
						isUnique: true,
						isNullable: false,
					},
					{
						name: 'salt',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('user');
	}
}
