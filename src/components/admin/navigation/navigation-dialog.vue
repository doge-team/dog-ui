<template>
     <el-dialog v-model="shown" title="导航" @close="onClsoe" v-loading="loading">
        <div class="menu-dialog-container">
            <singleFormVue 
            ref="formComp" 
            @confirm="$emit('confirm', $event.target.value)"
            :form="navFormComp?.form"
            :rules="navFormComp?.rules"
            >
                <navigationFormVue ref="navFormComp" :form="form"></navigationFormVue>
            </singleFormVue>
        </div>
        <template #footer>
      <span class="dialog-footer">
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="closeDialog">取消</el-button>
      </span>
    </template>
     </el-dialog>
</template>
<script lang="ts" setup>
import singleFormVue from '@/components/common/single-form.vue';
import { actionType, defualtMenuIcon } from '@/const/const-source';
import { Menu } from '@/models/menu';
import { menuStoreModule } from '@/store/modules/menu/menu';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import navigationFormVue from './navigation-form.vue';


const formComp = ref(null);
const navFormComp = ref(null);
const shown = ref(false);
const loading = ref(false);
let menuAction: actionType = 'new';

const form = ref({
    icon: defualtMenuIcon,
    order: 0,
    title: '',
} as Menu);

defineEmits(['confirm']);

const onSubmit = async() => {
    loading.value = true;
    const form: Menu = await formComp.value.onSubmit();
    console.log('submit form:', form);
    const result = menuAction === 'new' 
        ? await menuStoreModule.addMenu(form)
        : await menuStoreModule.updateMenu(form);
    if(!!result) {
        ElMessage.success('保存成功');
        shown.value = false;
    } else {
        ElMessage.success('保存失败');
    }
    loading.value = false;
}

const open = (menu) => {
    shown.value = true;
    form.value = !!menu ? menu : {...form.value};
    menuAction = !!menu ? 'edit' : 'new';
}

const onClsoe = () => {
    form.value = {} as Menu;
    formComp.value.clearValidate();
    menuAction = null;
}

const closeDialog = () => {
    shown.value = false;
}

defineExpose({
    open
});

</script>
<style lang="less" scoped>

</style>