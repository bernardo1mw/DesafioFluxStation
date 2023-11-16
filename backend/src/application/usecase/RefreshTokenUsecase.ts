import { TokenGenerator } from '../../domain/domain-service/TokenGenerator';
import { User } from '../../domain/entities';
import { FailedAuthenticationException } from '../../domain/exceptions/failed-auth.exception';
import UserRepository from '../../domain/repositories/UserRepository';

const EXPIRE_TIME = '20s';
const REFRESH_EXPIRE_TIME = '7d';

export default class RefreshTokenUsecase {
	constructor(
		readonly tokenManager: TokenGenerator,
		readonly userRepository: UserRepository,
	) {}
	async execute(
		input: RefreshTokenUsecase.Input,
	): Promise<RefreshTokenUsecase.Output> {
		const { document } = input;

		const user = await this.userRepository.findByDocument(document);
		if (!user) throw new FailedAuthenticationException();

		const tokenIssueDate = new Date();
		const tokenExpiresIn = new Date().setTime(tokenIssueDate.getTime() + 20000);

		const token = this.tokenManager.generate(user, EXPIRE_TIME, tokenIssueDate);
		const refreshToken = this.tokenManager.generate(
			user,
			REFRESH_EXPIRE_TIME,
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

export namespace RefreshTokenUsecase {
	export type Input = {
		document: string;
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
