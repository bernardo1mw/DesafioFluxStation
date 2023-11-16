export declare abstract class AppException extends Error {
    readonly customMessage: AppException.CustomMessage;
    readonly statusCode: number;
    readonly statusText: string;
    readonly details?: string | string[];
    constructor(customMessage: AppException.CustomMessage, statusCode?: number, statusText?: string, details?: string | string[]);
}
export declare namespace AppException {
    type CustomMessage = string | string[] | {
        field: string;
        messages: string[];
    }[];
    type InputDTO = {
        statusCode?: number;
        statusText?: string;
        customMessage?: string;
    };
}
