<template>
    <el-form-item prop="title" label="标题">
        <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item prop="order" label="排序">
        <el-input v-model="form.order" type="number"></el-input>
    </el-form-item>
    <el-form-item prop="icon" label="图标">
        <dogeUpload :form="form" uploadFolder="menu"></dogeUpload>
    </el-form-item>
</template>
<script lang="ts" setup>
import { useFormHooks } from '@/hooks/form';
import { Menu } from '@/models/menu';
import { reactive } from '@vue/reactivity';
import { FormRules } from 'element-plus';
import { PropType, toRefs } from 'vue';
import dogeUpload from '@/components/common/doge-upload.vue';

const props = defineProps({
    form: Object as PropType<Menu>
});

const { form } = toRefs(props);
const { getFormRules } = useFormHooks('menu');
const rules = reactive<FormRules>(getFormRules());

defineExpose({
    form,
    rules
})
</script>

<style lang="less" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>