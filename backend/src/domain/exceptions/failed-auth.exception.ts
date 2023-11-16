import { AppException } from './base';

export class FailedAuthenticationException extends AppException {
	constructor() {
		super('Authentication failed.', 401, 'FailedAuthenticationException');
	}
}
