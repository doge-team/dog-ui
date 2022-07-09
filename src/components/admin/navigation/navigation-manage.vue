<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <div class="actions">
            <el-select v-model="selectedMenu" filterable value-key="id">
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
            <el-table-column prop="order" label="顺序" width="180"/>
            <el-table-column prop="icon" label="图标" width="180">
                <template #default="scope">
                    <img :src="scope.row.icon" width="24" style="color: white;">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="导航名称" width="180" />
            <el-table-column prop="openType" label="打开方式" width="180">
                <template #default="scope">
                    {{ scope.row.openType === openTypeEnums.TARGET_REDIRECTION ? '新页面' : '本页面' }}
                </template>
            </el-table-column>
            <el-table-column prop="link" label="链接">
                <template #default="scope">
                    <a href="javascript:void(0)" @click="onNavLinkClick(scope.row)">{{scope.row.link}}</a>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click="openNavigationDialog(scope.row)"/>
                    <el-button type="danger" :icon="Delete" circle @click="removeNavigation(scope.row)" :loading="removeLoding[scope.row.id]"/>
                </template>
    </el-table-column>
        </el-table>
    </div>

    <navigationDialogVue ref="navigationDialog"></navigationDialogVue>
</template>
<script lang="ts" setup>
import navigationDialogVue from '@/components/admin/navigation/navigation-dialog.vue';
import { openTypeEnum, prefixEnum } from '@/const/const-source';
import { useLinkHooks } from '@/hooks/link';
import { useResultHooks } from '@/hooks/ResultHandler';
import { Menu } from '@/models/menu';
import { Navigation } from '@/models/navigation';
import { menuStoreModule } from '@/store/modules/menu';
import { navigationStoreModule } from '@/store/modules/navigation';
import { Delete, Edit } from '@element-plus/icons-vue';
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

const openTypeEnums = openTypeEnum;
//#endregion

//#region 方法
const { handleActionResult } = useResultHooks();
const { onNavLinkClick } = useLinkHooks();

const fetchData = async() => {
    if(isEmpty(menuStoreModule.menus)) {
        await menuStoreModule.loadMenus();
    }
    if(!isEmpty(menus.value)) {
        selectedMenu.value = menus.value[0];
    }
}

const removeNavigation = async(nav: Navigation) => {
    removeLoding[nav.id] = true;
    const result = await navigationStoreModule.removeNav(nav);
    handleActionResult('删除', result);
    removeLoding[nav.id] = false;
}

const openNavigationDialog = (navigation?) => {
    // 对于新增打开弹窗，将menuid传进去
    const navParam = navigation ?? { menuId: selectedMenu.value.id, prefix: prefixEnum.HTTP } as Navigation;
    navigationDialog.value.open(navParam);
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
            :not(:last-child) {
                margin-right: 16px;
            }
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