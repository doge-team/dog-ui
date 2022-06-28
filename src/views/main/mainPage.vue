<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="260px">
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
import NavigationVue from '@/components/main/navigation.vue';
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
import { Menu } from '@/models/menu';
import { menuStoreModule } from '@/store/modules/menu';
import { isEmpty } from 'lodash';
import { onBeforeMount, reactive, toRefs } from 'vue';

const state = reactive({
  menus: [] as Array<Menu>
})

const handlMenus = (menus: Menu[]) => {
  if(isEmpty(menus)) {
    return;
  }
  menus.forEach(menu => {
    menu.subRoute = `#${menu.title}`
  });
}

const fetchData = async () => {
    const menus = await menuStoreModule.loadMenus();
    handlMenus(menus);
    state.menus = menus as Array<Menu>;
}

onBeforeMount(() => {
  fetchData()
})

const { menus } = toRefs(state);


</script>

<style lang="less" scoped>
</style>
