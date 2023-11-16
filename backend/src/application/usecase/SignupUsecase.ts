import { UuidGenerator } from '../../domain/crypto/Uuid';
import { User } from '../../domain/entities';
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists.exception';
import UserRepository from '../../domain/repositories/UserRepository';

export default class Signup {
	constructor(
		readonly uuidGenerator: UuidGenerator,
		readonly userRepository: UserRepository,
	) {}
	async execute(input: Signup.Input): Promise<void> {
		const { document, password, name } = input;
		const documentExists = await this.userRepository.countBy(document);
		if (documentExists) throw new UserAlreadyExistsException();
		const uuid = this.uuidGenerator.generate();
		const user = await User.create({ document, password, name, uuid });
		await this.userRepository.save(user);
	}
}

export namespace Signup {
	export type Input = {
		document: string;
		password: string;
		name?: string;
	};
}
