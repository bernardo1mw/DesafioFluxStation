import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class DefaultExceptionsFilter implements ExceptionFilter {
    private loggerService;
    constructor();
    catch(exception: any, host: ArgumentsHost): any;
    logError(exception: any): void;
}
