<template>
    <el-form-item prop="menuId" label="菜单">
        <el-select v-model="form.menuId" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in menuSources" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
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
    <el-form-item prop="link" label="链接">
        <el-input v-model="form.link">
            <template #prepend >
                <el-select v-model="form.prefix" class="m-2" size="large" style="width:100px">
                    <el-option v-for="item in urlPrefixSource" 
                    :key="item" 
                    :label="item" 
                    :value="item"
                     />
                </el-select>
            </template>
        </el-input>
    </el-form-item>

    <el-form-item prop="icon" label="图标">
        <dogeUpload :form="form" uploadFolder="navigation"></dogeUpload>
    </el-form-item>
</template>
<script lang="ts" setup>
import { getAllMenusWithoutNav } from '@/api/menu';
import dogeUpload from '@/components/common/doge-upload.vue';
import { prefixEnum } from '@/const/const-source';
import { useFormHooks } from '@/hooks/form';
import { Menu } from '@/models/menu';
import { Navigation } from '@/models/navigation';
import { reactive, ref } from '@vue/reactivity';
import { FormRules } from 'element-plus';
import { onBeforeMount, PropType, toRefs } from 'vue';

//#region data
const props = defineProps({
    form: Object as PropType<Navigation>,
});

const { form } = toRefs(props);
const menuSources = ref([] as Menu[]);
const urlPrefixSource = ref([prefixEnum.HTTP, prefixEnum.HTTPS])
//#endregion

//#region method
const { getFormRules } = useFormHooks('navigation');

const rules = reactive<FormRules>(getFormRules());

const fetchData = async () => {
    const result = await getAllMenusWithoutNav();
    if (result.data.code === 0) {
        menuSources.value = result.data.data;
    }
}

onBeforeMount(() => {
    fetchData();
})
//#endregion

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
