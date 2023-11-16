import { AppException } from './base';

export class TokenInvalidException extends AppException {
	constructor() {
		super('Token invalid.', 401, 'TokenInvalidException');
	}
}
