import { AppException } from './base';

export class UserAlreadyExistsException extends AppException {
	constructor(message?: string) {
		super(
			message ??
				'Ops! Parece que este documento já está cadastrado em nosso site',
			409,
			'UserAlreadyExistsException',
		);
	}
}
