<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <div class="actions">
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
                            {{ nav?.title }},
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click="openMenuDialog(scope.row)"/>
                    <el-button type="danger" :icon="Delete" circle @click="removeMenu(scope.row.id)" :loading='removeLoding[scope.row.id]'/>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <menuDialogVue ref="menuDialog"></menuDialogVue>
</template>
<script lang="ts" setup>
import { useResultHooks } from '@/hooks/ResultHandler';
import { menuStoreModule } from '@/store/modules/menu';
import {
Delete,
Edit
} from '@element-plus/icons-vue';
import { computed } from '@vue/reactivity';
import { isEmpty } from 'lodash';
import { onBeforeMount, ref } from 'vue';
import menuDialogVue from './menu-dialog.vue';

//#region 数据
const menuDialog = ref(null);
const menus = computed(() => menuStoreModule.menus);
const loading = computed(() => menuStoreModule.loading);
const removeLoding = ref([]);
//#endregion

//#region 方法
const { handleActionResult } = useResultHooks();

const fetchData = async() => {
    await menuStoreModule.loadMenus();
}

const removeMenu = async(menuId) => {
    removeLoding[menuId] = true;
    const result = await menuStoreModule.removeMenu(menuId);
    handleActionResult('删除', result);
    removeLoding[menuId] = false;
}

const hasNavigation = (scope) => {
    return !isEmpty(scope.row.navigationList);
}

const openMenuDialog = (menu?) => {
    menuDialog.value.open(menu);
}
//#endregion

//#region 钩子函数
onBeforeMount(async() => {
    await fetchData();
})
//#endregion

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