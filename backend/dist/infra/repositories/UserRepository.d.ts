import { DataSource, Repository } from 'typeorm';
import UserRepository from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../database/mapping';
import { User } from '../../domain/entities';
export default class UserRepositoryTypeORMAdapter implements UserRepository {
    private readonly connection;
    repository: Repository<UserEntity>;
    constructor(connection: DataSource);
    findById(id: number): Promise<User>;
    countBy(document: string): Promise<number>;
    save(user: User): Promise<void>;
    findByDocument(document: string): Promise<User>;
}
