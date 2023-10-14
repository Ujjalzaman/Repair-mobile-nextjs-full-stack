export interface IMeta {
    limit: number;
    page: number;
    total: number;
}

export interface ISuccessResponseType {
    data: any;
    meta?: IMeta;
}

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};
