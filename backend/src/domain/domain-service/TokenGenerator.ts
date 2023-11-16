import { sign, verify } from 'jsonwebtoken';
import { User } from '../entities';

export class TokenGenerator {
	constructor(readonly key: string) {}

	generate(user: User, expiresIn: number | string, issueDate: Date) {
		return sign(
			{
				document: user.document.getValue(),
				iat: issueDate.getTime(),
				expiresIn: expiresIn,
			},
			process.env.JWT_SECRET_KEY,
		);
	}

	verify(token: string, config?: TokenGenerator.Config): any {
		return verify(token, config.secret || process.env.JWT_SECRET_KEY);
	}
}

export namespace TokenGenerator {
	export type Config = Partial<{
		secret: string;
		expiresIn: string;
		alg: string;
	}>;
}
