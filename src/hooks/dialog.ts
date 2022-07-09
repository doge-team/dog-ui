import { actionType } from "@/const/const-source";
import { ElMessage } from "element-plus";
import { Ref } from "vue";

export const useDialogHooks = ({ formRef, formDataHandler, formComp, shown, loading, action }:{formRef: Ref<any>, formDataHandler?,  formComp: any, shown: Ref<boolean>, action: Ref<actionType>, loading: Ref<boolean>}) => {
    const onSubmit = async( store: { add, update}) => {
        loading.value = true;
        const form = await formComp.value.onSubmit();
        if(formDataHandler) {
            formDataHandler(form);
        }
        if(!form) {
            ElMessage.error('请先完善表单信息!');
            loading.value = false;
            return;
        }
        const result = action.value === 'new' 
            ? await store.add(form)
            : await store.update(form);
        if(!!result) {
            ElMessage.success('保存成功');
            shown.value = false;
        } else {
            ElMessage.error('保存失败');
        }
        loading.value = false;
    }

    const onOpen = (formValue) => {
        shown.value = true;
        formRef.value = !!formValue ? formValue : {...formRef.value};
        action.value = !!formValue ? 'edit' : 'new';
    }

    const onClsoe = () => {
        formRef.value = {} as any;
        formComp.value.clearValidate();
        action.value = null;
        loading.value = false;
    }

    const closeDialog = () => {
        shown.value = false;
    }

    return {
        onSubmit,
        onOpen,
        onClsoe,
        closeDialog
    };
}