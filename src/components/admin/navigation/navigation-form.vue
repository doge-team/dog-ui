<template>
    <el-form-item prop="menuId" label="菜单">
        <el-input v-model="form.menuId"></el-input>
    </el-form-item>
    <el-form-item prop="title" label="标题">
        <el-input v-model="form.title"></el-input>
    </el-form-item>
        <el-form-item prop="description" label="副标题">
        <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item prop="order" label="排序">
        <el-input v-model="form.order" type="number"></el-input>
    </el-form-item>
    <el-row>
        <el-col>
            </el-form-item>
                <el-form-item prop="link" label="链接">
                <el-input v-model="form.link"></el-input>
            </el-form-item>
        </el-col>
        <el-col>
            <el-form-item prop="openType" label="打开方式">
                <el-input v-model="form.openType" type="number"></el-input>
            </el-form-item>
        </el-col>
    </el-row>

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
import { Navigation } from '@/models/navigation';
import { Plus } from '@element-plus/icons-vue';
import { computed, reactive } from '@vue/reactivity';
import { ElMessage, FormRules, UploadProps } from 'element-plus';
import { PropType, toRefs } from 'vue';

const props = defineProps({
    form: Object as PropType<Navigation>
});

const { form } = toRefs(props);

const src = computed(() => !!form ? form.value.icon : defualtMenuIcon);

const onUploadSucceed:UploadProps['onSuccess'] = ( response,uploadFile) => {
    form.value.icon = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}

const rules = reactive<FormRules>({
    menuId: [
        { required: true, message: '请选择对应的菜单!', trigger: 'blur' },
    ],
    description: [
        { required: true, message: '请输入描述信息!', trigger: 'blur' },
    ],
    link: [
        { required: true, message: '请输入导航链接!', trigger: 'blur' },
    ],
    openType: [
        { required: true, message: '请选择打开链接的方式!', trigger: 'blur' },
    ],
    title: [
        { required: true, message: '请输入标题!', trigger: 'blur' },
    ],
    order: [
        { required: true, message: '请输入顺序!', trigger: 'blur' },
    ]
})

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