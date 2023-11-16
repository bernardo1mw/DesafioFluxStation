import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user';
import { FuelEntity } from './fuel';
@Entity('refuel_history', { schema: 'public' })
export class RefuelHistoryEntity {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'vehicle_plate' })
	vehiclePlate: string;

	@Column('character varying', { name: 'driver_document' })
	driverDocument: string;

	@Column('character varying', { name: 'fuel' })
	fuel: string;

	@Column('numeric', { name: 'quantity' })
	quantity: number;

	@Column('timestamp without time zone', { name: 'refuel_date' })
	refuelDate: Date;
}
