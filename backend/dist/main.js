"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./infra/nestjs/ioc/app.module");
const default_exception_filter_1 = require("./infra/nestjs/filter/default-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new default_exception_filter_1.DefaultExceptionsFilter());
    app.enableCors();
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map