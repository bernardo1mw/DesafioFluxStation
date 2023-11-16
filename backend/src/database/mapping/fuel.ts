import { Column, Entity, Index, OneToMany } from 'typeorm';
import { RefuelHistoryEntity } from './refuelHistory';

@Index('UQ_115c94d4c5103c2aafbefb2208b', ['stock'], { unique: true })
@Entity('fuel', { schema: 'public' })
export class FuelEntity {
	@Column('character varying', { primary: true, name: 'name' })
	name: string;

	@Column('numeric', { name: 'price' })
	price: string;

	@Column('numeric', { name: 'stock', unique: true })
	stock: string;

	@OneToMany(() => RefuelHistoryEntity, (refuelHistory) => refuelHistory.fuel)
	refuelHistories: RefuelHistoryEntity[];
}
