<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <div class="actions">
            <el-select v-model="selectedMenu">
                <el-option 
                v-for="menu in menus" 
                :key="menu.id"
                :label="menu.title"
                :value="menu"
                />
            </el-select>
            <el-button type='primary' @click="openNavigationDialog()">新增导航</el-button>
        </div>
        <el-table :data="navigations" stripe style="width: 100%">
            <el-table-column prop="icon" label="图标" width="180">
                <template #default="scope">
                    <img :src="scope.row.icon" width="24" style="color: white;">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="目录名" width="180" />
            <el-table-column prop="order" label="顺序" width="180"/>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click="openNavigationDialog(scope.row)"/>
                    <el-button type="danger" :icon="Delete" circle @click="removeNavigation(scope.row.id)" :loading="removeLoding[scope.row.id]"/>
                </template>
    </el-table-column>
        </el-table>
    </div>

    <navigationDialogVue ref="navigationDialog"></navigationDialogVue>
</template>
<script lang="ts" setup>
import navigationDialogVue from '@/components/admin/navigation/navigation-dialog.vue';
import { useResultHooks } from '@/hooks/ResultHandler';
import { Menu } from '@/models/menu';
import { menuStoreModule } from '@/store/modules/menu';
import { navigationStoreModule } from '@/store/modules/navigation';
import {
Delete,
Edit
} from '@element-plus/icons-vue';
import { computed } from '@vue/reactivity';
import { isEmpty } from 'lodash';
import { onBeforeMount, ref } from 'vue';

//#region 数据
const navigationDialog = ref(null);

const selectedMenu = ref<Menu>(null);
const menus = computed(() => menuStoreModule.menus);
const navigations = computed(() => selectedMenu ? selectedMenu.value?.navigationList : []);

const loading = computed(() => menuStoreModule.loading);
const removeLoding = ref([]);
//#endregion

//#region 方法
const { handleActionResult } = useResultHooks();

const fetchData = async() => {
    console.log('fetach')
    if(isEmpty(menuStoreModule.menus)) {
        await menuStoreModule.loadMenus();
        if(!isEmpty(menus.value)) {
            selectedMenu.value = menus.value[0];
        }
    }
}

const removeNavigation = async(navId) => {
    removeLoding[navId] = true;
    const result = await navigationStoreModule.removeNav(navId);
    handleActionResult('删除', result);
    removeLoding[navId] = false;
}

const openNavigationDialog = (navigation?) => {
    navigationDialog.value.open(navigation);
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