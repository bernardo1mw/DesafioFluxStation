import { Module, Global } from '@nestjs/common';
import { repositoryProviders } from '../providers/repository';

@Global()
@Module({
	providers: [...repositoryProviders],
	exports: [...repositoryProviders],
})
export class RepositoryFactoryModule {}
