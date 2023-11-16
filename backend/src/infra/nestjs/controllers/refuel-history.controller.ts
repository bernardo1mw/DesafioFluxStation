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
import { RefuelHistoryProviderEnum } from '../ioc/providers/constants';
import RegisterRefuelUsecase from '../../../application/usecase/RegisterRefuelUsecase';
import GetRefuelHistoryUsecase from '../../../application/usecase/GetRefuelHistoryUsecase';

@Controller('refuel')
@UseGuards(AuthGuard)
export class RefuelHistoryController {
	constructor(
		@Inject(RefuelHistoryProviderEnum.RegisterRefuelUsecase)
		private readonly registerRefuelUsecase: RegisterRefuelUsecase,
		@Inject(RefuelHistoryProviderEnum.GetRefuelHistoryUsecase)
		private readonly getRefuelHistoryUsecase: GetRefuelHistoryUsecase,
	) {}

	@Get('history')
	async getAll(@Req() req): Promise<any> {
		return this.getRefuelHistoryUsecase.execute({
			document: req.user.document,
		});
	}

	@Post('register')
	async registerRefuel(
		@Req() req,
		@Body()
		{
			licensePlate,
			fuel,
			refuelDate,
			quantity,
		}: {
			document: string;
			licensePlate: string;
			fuel: string;
			refuelDate: Date;
			quantity: number;
		},
	): Promise<any> {
		return this.registerRefuelUsecase.execute({
			document: req.user.document,
			licensePlate,
			fuel,
			refuelDate,
			quantity,
		});
	}
}
