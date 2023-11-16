import { User } from '../entities';
export default interface UserRepository {
    countBy(document: string): Promise<number>;
    save(user: User): Promise<void>;
    findByDocument(document: string): Promise<User>;
    findById(id: number): Promise<User>;
}
