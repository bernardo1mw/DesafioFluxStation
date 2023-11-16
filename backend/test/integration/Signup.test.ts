import User from '../../src/domain/entities/User';
import Login from '../../src/application/usecase/LoginUsecase';
import Signup from '../../src/application/usecase/SignupUsecase';
import UserRepository from '../../src/domain/repositories/UserRepository';

test('Deve criar um novo usuario', async () => {
	const users: any = {};
	const userRepository: UserRepository = {
		async save(user: User): Promise<void> {
			users[user.email.getValue()] = user;
		},
		async findByEmail(email: string): Promise<User> {
			return users[email];
		},
		async countBy(input: string): Promise<number> {
			throw new Error('Function not implemented.');
		},
	};
	const signup = new Signup(userRepository);
	const input = {
		email: 'joao@gmail.com',
		password: '1234',
		date: new Date('2023-03-01T10:00:00'),
	};
	await signup.execute(input);

	const login = new Login(userRepository);
	const output = await login.execute(input);
	expect(output.token).toBe(
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDB9.nPHGoaoMLLpmDS61-njfqX6G5ZvwT3Y5U71uOXGbRYY',
	);
});
