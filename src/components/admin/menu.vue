<template>
    <div class="menu-container el-card is-hover-shadow" v-loading="loading">
        <el-table :data="menus" stripe style="width: 100%">
            <el-table-column prop="icon" label="图标" width="180">
                <template #default="scope">
                    <img :src="scope.row.icon" width="24" style="color: white;">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="目录名" width="180" />
            <el-table-column prop="order" label="顺序" />
            <el-table-column prop="navigationList" label="导航"> 
                <template #default="scope">
                    <!-- 待做：导航展示 -->
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle />
                    <el-button type="danger" :icon="Delete" circle @click="removeClick(scope.row.id)"/>
                </template>
    </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import { menuStoreModule } from '@/store/modules/menu/menu';
import { onBeforeMount, ref } from 'vue';
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';

    const loading = ref(false);
    const menus = computed(() => menuStoreModule.menus);

    const fetchData = async() => {
        loading.value = true;
        await menuStoreModule.loadMenus();
        loading.value = false;
    }

    const removeClick = (menuId) => {
        menuStoreModule.removeMenu(menuId);
    }

    onBeforeMount(() => {
        fetchData();
    })

</script>
<style lang="less">
    .menu-container {
        height: 100%;
    }
</style>