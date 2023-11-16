import Cpf from '../value-objects/Cpf';
import Password from '../value-objects/Password';

export class User {
	id: number;
	uuid: string;
	document: Cpf;
	createdAt: Date;
	name: string;
	password: Password;

	private constructor(input: Partial<User.Input>) {
		Object.assign(this, input);
	}

	static async create(input: Partial<User.CreateInput>) {
		return new User({
			document: new Cpf(input.document),
			password: await Password.create(input.password),
			createdAt: new Date(),
			name: input.name,
			uuid: input.uuid,
			id: input.id,
		});
	}

	async validatePassword(password: string) {
		return this.password.validate(password);
	}

	static async buildExistingUser(
		input: Partial<User.BuildInput>,
	): Promise<User> {
		return new User({
			password: new Password(input.hash, input.salt),
			createdAt: input.createdAt,
			name: input.name,
			document: new Cpf(input.document),
			id: input.id,
			uuid: input.uuid,
		});
	}
}

export namespace User {
	export type Input = {
		password: Password;
		createdAt: Date;
		name: string;
		id: number;
		uuid: string;
		document: Cpf;
	};
	export type CreateInput = {
		password: string;
		createdAt: Date;
		name: string;
		id: number;
		uuid: string;
		document: string;
	};
	export type BuildInput = {
		hash: string;
		salt: string;
		document: string;
		uuid: string;
		createdAt: Date;
		name: string;
		id: number;
	};
}
