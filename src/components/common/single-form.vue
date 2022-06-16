<template>
    <el-form 
    :model="form" 
    :rules="rules"
    label-width="120px" 
    ref="formRef">
        <slot></slot>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>

</template>
<script lang="ts" setup>
import { checkForm } from '@/utils/form';
import { FormInstance } from 'element-plus';
import { ref, toRefs } from 'vue';
const props = defineProps(['form', 'rules'])
const emits = defineEmits(['confirm'])
const { form, rules } = toRefs(props);
const formRef = ref<FormInstance>();

const onSubmit = async() => {
    const checkResult = await checkForm(formRef);
    if(!checkResult) {
        return;
    }
    emits('confirm', form);
}
</script>
<style lang="less">
</style>