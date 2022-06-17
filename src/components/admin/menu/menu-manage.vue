<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <div class="actions">
            <el-button type='primary' @click="onAddMenu">新增</el-button>
        </div>
        <el-table :data="menus" stripe style="width: 100%">
            <el-table-column prop="icon" label="图标" width="180">
                <template #default="scope">
                    <img :src="scope.row.icon" width="24" style="color: white;">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="目录名" width="180" />
            <el-table-column prop="order" label="顺序" width="180"/>
            <el-table-column prop="navigationList" label="导航"> 
                <template #default="scope">
                    <div v-if="hasNavigation(scope)">
                        <a v-for="nav in scope?.row?.navigationList" :href="nav?.link">{{ nav?.title }},</a>
                    </div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click="onEditMenu(scope.row)"/>
                    <el-button type="danger" :icon="Delete" circle @click="removeClick(scope.row.id)" v-loading='removeLoding[scope.row.id]'/>
                </template>
    </el-table-column>
        </el-table>
    </div>

    <menuDialogVue ref="menuDialog"></menuDialogVue>
</template>
<script lang="ts" setup>
import menuDialogVue from './menu-dialog.vue';
import { menuStoreModule } from '@/store/modules/menu/menu';
import { onBeforeMount, ref } from 'vue';
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
import { isEmpty } from 'lodash';
import { ElMessage } from 'element-plus';

    const menuDialog = ref(null);
    const menus = computed(() => menuStoreModule.menus);
    const loading = computed(() => menuStoreModule.loading);
    const removeLoding = ref([]);

    const fetchData = async() => {
        await menuStoreModule.loadMenus();
    }

    const removeClick = async(menuId) => {
        removeLoding[menuId] = true;
        const result = await menuStoreModule.removeMenu(menuId);
        if(result) {
            ElMessage.success('删除成功');
        } else {
            ElMessage.error('删除失败');
        }
        removeLoding[menuId] = false;
    }

    const hasNavigation = (scope) => {
        console.log('row',scope.row.navigationList);
        return !isEmpty(scope.row.navigationList);
    }

    const onEditMenu = (menu) => {
        menuDialog.value.open(menu);
    }

    const onAddMenu = () => {
        menuDialog.value.open();
    }

    onBeforeMount(() => {
        fetchData();
    })

</script>
<style lang="less">
    .menu-container {
        height: 100%;

        .actions {
            display: flex;
            justify-content: flex-end;
            padding: 20px 30px;
        }
    }
</style>