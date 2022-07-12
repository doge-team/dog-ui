<template >
    <div class="upload-container">
        <el-upload
            class="avatar-uploader"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="onUploadSucceed"
            :before-upload="beforeAvatarUpload"
            :headers="myHeaders"
        >
            <img v-if="form.icon" :src="src" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
    </div>
</template>
<script lang="ts" setup>
import { useUploadHooks } from "@/hooks/upload";
import { computed, toRefs } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { defualtMenuIcon } from "@/const/const-source";
import { BaseUrlConfig } from "@/config";
import { getToken } from "@/utils/cookies";

const uploadUrl = BaseUrlConfig[process.env.NODE_ENV].baseUrl;
const fileUrl = BaseUrlConfig[process.env.NODE_ENV].fileUrl;
const props = defineProps({
    form: Object,
    uploadFolder: String
});
const { form } = toRefs(props);
const src = computed(() => !!form ? `${fileUrl}/${form.value.icon}` : defualtMenuIcon);
const uploadPath = computed(() => `${uploadUrl}/file/${props.uploadFolder}/uploadFile`);
const myHeaders = { token: getToken() };

const { beforeAvatarUpload, onUploadSucceed } = useUploadHooks(form);

</script>
<style lang="less">
    
</style>