"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const base_1 = require("../../../domain/exceptions/base");
const internal_server_error_exception_1 = require("../../../domain/exceptions/internal-server-error.exception");
let DefaultExceptionsFilter = class DefaultExceptionsFilter {
    constructor() {
        this.loggerService = new common_1.Logger();
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception instanceof base_1.AppException) {
            const { statusText, statusCode, customMessage, details } = exception;
            if (statusCode === 500)
                this.logError(exception);
            return response.status(statusCode).send({
                statusText,
                errors: typeof customMessage === 'string' ? [customMessage] : customMessage,
                details: typeof details === 'string' ? [details] : details,
            });
        }
        const { statusCode, statusText, customMessage } = new internal_server_error_exception_1.InternalServerErrorException();
        const errors = [exception?.message || customMessage];
        return response.status(exception?.status || statusCode).send({
            statusText: exception?.name || statusText,
            errors,
        });
    }
    logError(exception) {
        this.loggerService.error(exception);
    }
};
exports.DefaultExceptionsFilter = DefaultExceptionsFilter;
exports.DefaultExceptionsFilter = DefaultExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [])
], DefaultExceptionsFilter);
//# sourceMappingURL=default-exception.filter.js.map