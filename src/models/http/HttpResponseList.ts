import { ResponseBase } from "./ResponseBase";

export interface HttpResponseList<T> extends ResponseBase {
    data: T[];
}