import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
import { User } from '../../domain/entities';
import { FailedAuthenticationException } from '../../domain/exceptions/failed-auth.exception';
import UserRepository from '../../domain/repositories/UserRepository';

// const EXPIRE_TIME = '20s';
// const REFRESH_EXPIRE_TIME = '7d';

export default class Login {
	constructor(
		readonly tokenManager: TokenGenerator,
		readonly userRepository: UserRepository,
	) {}
	async execute(input: Login.Input): Promise<Login.Output> {
		const { document, password, date } = input;
		const user = await this.userRepository.findByDocument(document);
		if (!user) throw new FailedAuthenticationException();
		const isValidPassword = await user.validatePassword(password);
		if (!isValidPassword) throw new FailedAuthenticationException();

		const tokenIssueDate = !!date ? date : new Date();

		const tokenExpiresIn = new Date().setTime(tokenIssueDate.getTime() + 20000);

		const token = this.tokenManager.generate(
			user,
			process.env.EXPIRE_TIME,
			tokenIssueDate,
		);
		const refreshToken = this.tokenManager.generate(
			user,
			process.env.REFRESH_EXPIRE_TIME,
			tokenIssueDate,
		);
		return {
			user: {
				id: user.id,
				name: user.name,
				document: user.document.getValue(),
			},
			backendTokens: { token, refreshToken, expiresIn: tokenExpiresIn },
		};
	}
}

export namespace Login {
	export type Input = {
		document: string;
		password: string;
		date?: Date;
	};

	export type Output = {
		user: UserOutput;
		backendTokens: TokenOutput;
	};

	export type UserOutput = {
		id: number;
		name: string;
		document: string;
	};
	export type TokenOutput = {
		token: string;
		refreshToken: string;
		expiresIn: number;
	};
}
