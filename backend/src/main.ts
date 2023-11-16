import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/nestjs/ioc/app.module';
import { DefaultExceptionsFilter } from './infra/nestjs/filter/default-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new DefaultExceptionsFilter());
	app.enableCors();
	await app.listen(8080);
}
bootstrap();
