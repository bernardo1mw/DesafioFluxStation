import { AppException } from './base';

export class UserNotFoundException extends AppException {
	constructor() {
		super('User not found.', 404, 'UserNotFoundException');
	}
}
