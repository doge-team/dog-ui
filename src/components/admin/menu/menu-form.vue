<template>
    <el-form-item prop="title" label="标题">
        <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item prop="order" label="排序">
        <el-input v-model="form.order" type="number"></el-input>
    </el-form-item>
    <el-form-item prop="icon" label="图标">
        <el-upload
            class="avatar-uploader"
            action="http://152.136.215.195:10000/file/menu/uploadFile"
            :show-file-list="false"
            :on-success="onUploadSucceed"
            :before-upload="beforeAvatarUpload"
        >
            <img v-if="form.icon" :src="src" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
    </el-form-item>
</template>
<script lang="ts" setup>
import { defualtMenuIcon } from '@/const/const-source';
import { useFormHooks } from '@/hooks/form';
import { useUploadHooks } from '@/hooks/upload';
import { Menu } from '@/models/menu';
import { Plus } from '@element-plus/icons-vue';
import { computed, reactive } from '@vue/reactivity';
import { FormRules } from 'element-plus';
import { PropType, toRefs } from 'vue';

const props = defineProps({
    form: Object as PropType<Menu>
});

const { form } = toRefs(props);

const src = computed(() => !!form ? form.value.icon : defualtMenuIcon);

const { beforeAvatarUpload, onUploadSucceed } = useUploadHooks(form);
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