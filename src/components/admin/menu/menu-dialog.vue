<template>
     <el-dialog v-model="shown" title="Shipping address">
        <div class="menu-dialog-container">
            <singleFormVue @confirm="$emit('confirm', $event.target.value)">
                <menuFormVue></menuFormVue>
            </singleFormVue>
        </div>
     </el-dialog>
</template>
<script lang="ts" setup>
import singleFormVue from '@/components/common/single-form.vue';
import menuFormVue from './menu-form.vue';
import { toRefs } from 'vue';

const props = defineProps(['shown']);
const emits = defineEmits(['confirm']);
const { shown } = toRefs(props);

</script>
<style lang="less" scoped>

</style>