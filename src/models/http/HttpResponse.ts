import { ResponseBase } from "./ResponseBase";

export interface HttpResponse<T> extends ResponseBase {
    data: T;
}