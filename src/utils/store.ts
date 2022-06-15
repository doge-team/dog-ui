import { AxiosResponse } from "axios"

// axios结果处理方式
export const getResultOrDefault = (result: AxiosResponse, defaultValue: any = null) => {
    if(result.data.code !== 0) {
        return defaultValue;
    } else {
        return result.data.data;
    }
}