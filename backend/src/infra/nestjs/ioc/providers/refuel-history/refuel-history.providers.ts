import { FactoryProvider, Provider } from '@nestjs/common';
import { RepositoryProviderEnum } from '../repository/repository.constants';
import { RefuelHistoryProviderEnum } from './refuel-history.constants';
import RegisterRefuelUsecase from '../../../../../application/usecase/RegisterRefuelUsecase';
import RefuelHistoryRepository from '../../../../repositories/RefuelHistoryRepository';
import GetRefuelHistoryUsecase from '../../../../../application/usecase/GetRefuelHistoryUsecase';

const registerRefuelUsecaseProvider: FactoryProvider = {
	provide: RefuelHistoryProviderEnum.RegisterRefuelUsecase,
	useFactory: (refuelHistoryRepository: RefuelHistoryRepository) =>
		new RegisterRefuelUsecase(refuelHistoryRepository),
	inject: [RepositoryProviderEnum.RefuelHistoryRepository],
};
const getRefuelHistoryUsecaseProvider: FactoryProvider = {
	provide: RefuelHistoryProviderEnum.GetRefuelHistoryUsecase,
	useFactory: (refuelHistoryRepository: RefuelHistoryRepository) =>
		new GetRefuelHistoryUsecase(refuelHistoryRepository),
	inject: [RepositoryProviderEnum.RefuelHistoryRepository],
};

export const refuelHistoryProviders: Provider[] = [
	registerRefuelUsecaseProvider,
	getRefuelHistoryUsecaseProvider,
];

export const refuelHistoryExports: Provider[] = [
	registerRefuelUsecaseProvider,
	getRefuelHistoryUsecaseProvider,
];
