import {
	Body,
	Controller,
	Get,
	Inject,
	Param,
	Patch,
	Post,
	Req,
	Request,
	UseGuards,
} from '@nestjs/common';
import { UserProviderEnum } from '../ioc/providers/user/user.constants';
import { AuthGuard } from '../../guards';
import FindUserByIdUsecase from '../../../application/usecase/FindUserByIdUsecase';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
	constructor(
		@Inject(UserProviderEnum.FindUserByIdUsecase)
		private readonly findUserByIdUsecase: FindUserByIdUsecase,
	) {}

	@Get(':id')
	async findById(@Param('id') id: number): Promise<any> {
		return this.findUserByIdUsecase.execute({ id });
	}
}
