<template>
    <el-form 
    :model="form" 
    :rules="rules"
    label-width="120px" 
    ref="formRef">
        <slot></slot>
    </el-form>

</template>
<script lang="ts" setup>
import { checkForm } from '@/utils/form';
import { FormInstance } from 'element-plus';
import { cloneDeep } from 'lodash';
import { ref, toRefs } from 'vue';
const props = defineProps(['form', 'rules'])
const { form, rules } = toRefs(props);
const formRef = ref<FormInstance>();

const onSubmit = async() => {
    const checkResult = await checkForm(formRef);
    if(!checkResult) {
        return null;
    }
    return cloneDeep(form.value);
}

const clearValidate = () => {
    formRef.value.clearValidate();
}

defineExpose({
    onSubmit,
    clearValidate
})
</script>
<style lang="less">
</style>