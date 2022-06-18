<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <div class="actions">
            <el-button type='primary' @click="openNavigationDialog()">新增导航</el-button>
            <el-button type='primary' @click="openMenuDialog()">新增菜单</el-button>
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
                    <div v-if="hasNavigation(scope)" class="navgroup">
                        <div class="nav" v-for="nav in scope?.row?.navigationList">
                            <a @click="openNavigationDialog(nav)" href="javascript:void(0)">{{ nav?.title }}</a>
                            <label style="color:red; cursor: pointer;" @click="removeNav(nav)">X</label>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click="openMenuDialog(scope.row)"/>
                    <el-button type="danger" :icon="Delete" circle @click="removeMenu(scope.row.id)" v-loading='removeLoding[scope.row.id]'/>
                </template>
    </el-table-column>
        </el-table>
    </div>

    <menuDialogVue ref="menuDialog"></menuDialogVue>
    <navigationDialogVue ref="navigationDialog"></navigationDialogVue>
</template>
<script lang="ts" setup>
import menuDialogVue from './menu-dialog.vue';
import navigationDialogVue from '@/components/admin/navigation/navigation-dialog.vue';
import { onBeforeMount, ref } from 'vue';
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
import { isEmpty } from 'lodash';
import { ElMessage } from 'element-plus';
import { menuStoreModule } from '@/store/modules/menu';
import { navigationStoreModule } from '@/store/modules/navigation';

const menuDialog = ref(null);
const navigationDialog = ref(null);
const menus = computed(() => menuStoreModule.menus);
const loading = computed(() => menuStoreModule.loading);
const removeLoding = ref([]);
const fetchData = async() => {
    await menuStoreModule.loadMenus();
}
const removeMenu = async(menuId) => {
    removeLoding[menuId] = true;
    const result = await menuStoreModule.removeMenu(menuId);
    if(result) {
        ElMessage.success('删除成功');
    } else {
        ElMessage.error('删除失败');
    }
    removeLoding[menuId] = false;
}
const removeNav = async(navigation) => {
    const result = await navigationStoreModule.removeNav(navigation);
    if(result) {
        ElMessage.success('删除成功')
    } else {
        ElMessage.error('删除失败')
    }
}
const hasNavigation = (scope) => {
    return !isEmpty(scope.row.navigationList);
}
const openMenuDialog = (menu?) => {
    menuDialog.value.open(menu);
}
const openNavigationDialog = (navigation?) => {
    navigationDialog.value.open(navigation);
}
onBeforeMount(async() => {
    await fetchData();
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

        .navgroup {
            display: flex;

            .nav {
                margin-left: 4px;
            a {
                color: blue;
                margin-left: 4px;
            }
            }
        }

    }
</style>