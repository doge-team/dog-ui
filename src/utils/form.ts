import { FormInstance } from "element-plus";
import { Ref } from "vue";

export const checkForm = async(formRef: Ref<FormInstance>) => {
    try {
        const result = await formRef.value.validate();
        return result;
    } catch (error) {
        console.log(error)
    }

}