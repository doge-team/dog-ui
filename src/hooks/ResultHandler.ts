import { ElMessage } from "element-plus"

export const useResultHooks = () => {
    const handleActionResult = (action: string, result: any) => {
        if(result) {
            ElMessage.success(`${action}成功!`);
        } else {
            ElMessage.error(`${action}失败!`)
        }
    }

    return {
        handleActionResult
    }
}