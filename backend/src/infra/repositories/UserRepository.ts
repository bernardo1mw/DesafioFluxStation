import { DataSource, Repository } from 'typeorm';
import UserRepository from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../database/mapping';
import { User } from '../../domain/entities';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';

export default class UserRepositoryTypeORMAdapter implements UserRepository {
	repository: Repository<UserEntity>;

	constructor(private readonly connection: DataSource) {
		this.repository = this.connection.getRepository(UserEntity);
	}

	async findById(id: number): Promise<User> {
		const entity = await this.repository.findOneBy({ id });

		if (!entity) throw new UserNotFoundException();

		const user = await User.buildExistingUser({
			document: entity.document,
			hash: entity.password,
			salt: entity.salt,
			name: entity.name,
			id: entity.id,
		});
		return user;
	}

	async countBy(document: string): Promise<number> {
		const count = this.repository.countBy({ document });
		return count;
	}
	async save(user: User): Promise<void> {
		const entity = this.repository.create({
			id: user.id,
			name: user.name,
			password: user.password.value,
			document: user.document.getValue(),
			salt: user.password.salt,
		});
		await this.repository.save(entity);
	}
	async findByDocument(document: string): Promise<User> {
		const entity = await this.repository.findOneBy({ document });

		if (!entity) throw new UserNotFoundException();

		const user = await User.buildExistingUser({
			document,
			hash: entity.password,
			salt: entity.salt,
			name: entity.name,
			id: entity.id,
		});
		return user;
	}
}
