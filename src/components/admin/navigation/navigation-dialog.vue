<template>
     <el-dialog v-model="shown" title="导航" @close="onClsoe">
        <div class="menu-dialog-container"  v-loading="loading">
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
import { Navigation } from '@/models/navigation';
import { navigationStoreModule } from '@/store/modules/navigation';
import { Ref, ref } from 'vue';
import navigationFormVue from './navigation-form.vue';

const formComp = ref(null);
const navFormComp = ref(null);
const shown = ref(false);
const loading = ref(false);
let action: Ref<actionType> = ref('new');

const form = ref({
    icon: defualtMenuIcon,
    description: '',
    link: '',
    openType: '',
    order: 0,
    title: ''
} as Navigation);

defineEmits(['confirm']);

const { onSubmit, onOpen, onClsoe, closeDialog } = useDialogHooks( form, formComp, shown, action, loading);
const confirm = () => onSubmit({ add: (nav) => navigationStoreModule.addNavigation(nav), update: (nav) => navigationStoreModule.updateNavigation(nav) });
const open = (menu) => onOpen(menu);

defineExpose({
    open
});

</script>
<style lang="less" scoped>

</style>