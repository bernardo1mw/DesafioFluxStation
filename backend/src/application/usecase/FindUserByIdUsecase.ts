import { UuidGenerator } from '../../domain/crypto/Uuid';
import { User } from '../../domain/entities';
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists.exception';
import UserRepository from '../../domain/repositories/UserRepository';

export default class FindUserByIdUsecase {
	constructor(readonly userRepository: UserRepository) {}
	async execute(
		input: FindUserByIdUsecase.Input,
	): Promise<FindUserByIdUsecase.Output> {
		const { id } = input;
		const user = await this.userRepository.findById(id);
		return { id: user.id, name: user.name, document: user.document.getValue() };
	}
}

export namespace FindUserByIdUsecase {
	export type Input = {
		id: number;
	};
	export type Output = {
		id: number;
		name: string;
		document: string;
	};
}
