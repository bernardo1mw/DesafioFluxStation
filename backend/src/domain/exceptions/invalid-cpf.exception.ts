import { AppException } from './base';

export class InvalidCpfException extends AppException {
	constructor() {
		super('Invalid CPF.', 404, 'InvalidCpfException');
	}
}
