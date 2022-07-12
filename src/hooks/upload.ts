import { ElMessage, UploadFile, UploadFiles, UploadProps } from "element-plus"
import { Ref } from "vue"

const ALLOWED_TYPE = [
    'imge/png',
    'image/jpeg',
    'image/jpg',
    'image/gif'
]

export const useUploadHooks = (form: Ref<any>) => {
    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
        if (ALLOWED_TYPE.includes(rawFile.type)) {
            ElMessage.error('上传文件格式不正确！')
            return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('文件大小最多2MB！')
            return false
        }
        return true
    }

    const onUploadSucceed:UploadProps['onSuccess'] = ( response,uploadFile) => {
        if(response.code === 0) {
            form.value.icon = response.data.path;
        } else {
            ElMessage.error('文件上传失败')
        }
    }

    return {
        beforeAvatarUpload,
        onUploadSucceed
    }
}