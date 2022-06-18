<template>
     <el-dialog v-model="shown" title="菜单" @close="onClsoe">
        <div class="menu-dialog-container"  v-loading="loading">
            <singleFormVue 
            ref="formComp"
            :form="menuFormComp?.form"
            :rules="menuFormComp?.rules"
            >
                <menuFormVue ref="menuFormComp" :form="form"></menuFormVue>
            </singleFormVue>
        </div>
        <template #footer>
            <span class="dialog-footer">
                    <el-button type="primary" @click="confirm">确认</el-button>
                    <el-button @click="closeDialog">取消</el-button>
            </span>
        </template>
     </el-dialog>
</template>
<script lang="ts" setup>
import singleFormVue from '@/components/common/single-form.vue';
import { actionType, defualtMenuIcon } from '@/const/const-source';
import { useDialogHooks } from '@/hooks/dialog';
import { Menu } from '@/models/menu';
import { menuStoreModule } from '@/store/modules/menu';
import { Ref, ref } from 'vue';
import menuFormVue from './menu-form.vue';


const formComp = ref(null);
const menuFormComp = ref(null);
const shown = ref(false);
const loading = ref(false);
let menuAction: Ref<actionType> = ref('new');

const form = ref({
    icon: defualtMenuIcon,
    order: 0,
    title: '',
} as Menu);

const { onSubmit, onOpen, onClsoe, closeDialog } = useDialogHooks(form, formComp, shown, menuAction, loading);
const confirm = () => onSubmit({ add: (menu) => menuStoreModule.addMenu(menu), update: (menu) => menuStoreModule.updateMenu(menu) });
const open = (menu: any) => onOpen(menu);

defineExpose({
    open
});

</script>
<style lang="less" scoped>

</style>