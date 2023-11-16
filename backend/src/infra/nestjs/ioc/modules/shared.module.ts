import { Global, Module } from '@nestjs/common';
import { sharedProvider } from '../providers/shared';

@Global()
@Module({
	providers: [...sharedProvider],
	exports: [...sharedProvider],
})
export class SharedModule {}
