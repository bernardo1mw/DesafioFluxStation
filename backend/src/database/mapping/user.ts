import {
	Column,
	Entity,
	Index,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { RefuelHistoryEntity } from './refuelHistory';

@Index('UQ_71fdad8489d3d818ec393e6eb14', ['document'], { unique: true })
@Entity('user', { schema: 'public' })
export class UserEntity {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'name', length: 255 })
	name: string;

	@Column('character varying', { name: 'password', length: 255 })
	password: string;

	@Column('character varying', { name: 'document', unique: true, length: 255 })
	document: string;

	@Column('character varying', { name: 'salt', length: 255 })
	salt: string;

	@OneToMany(
		() => RefuelHistoryEntity,
		(refuelHistory) => refuelHistory.driverDocument,
	)
	refuelHistories: RefuelHistoryEntity[];
}
