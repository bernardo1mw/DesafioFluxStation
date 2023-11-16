import { v4 as uuid } from 'uuid';
import { UuidGenerator } from '../../domain/crypto/Uuid';

export class UUIDAdapter implements UuidGenerator {
	generate(): string {
		return uuid();
	}
}
