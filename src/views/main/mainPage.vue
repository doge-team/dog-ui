<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideVue :menus="menus"></AsideVue>
      </el-aside>
      <el-container>
        <el-header style="background-color:antiquewhite">
          <HeaderVue></HeaderVue>
        </el-header>
        <el-main style="background-color: rgb(245, 245, 245);">
          <NavigationVue :menus="menus"></NavigationVue>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
import NavigationVue from '@/components/main/navigation.vue';
import { getAllMenus } from '@/api/menu';
import { onBeforeMount, reactive, toRefs } from 'vue';
import { Menu } from '@/models/menu';

const state = reactive({
  menus: [] as Array<Menu>
})
const fetchData = async () => {
    const res = await getAllMenus();
    state.menus = (res.data.data || []) as Array<Menu>;
}

onBeforeMount(() => {
  fetchData()
})

const { menus } = toRefs(state);


</script>

<style lang="less" scoped>
</style>
