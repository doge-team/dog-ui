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
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
import NavigationVue from '@/components/main/navigation.vue';
import { Menu } from '@/models/menu';
const menus = [
    { 
        icon: 'none',
        id: 0,
        navigationList: [],
        order: 0,
        title: '菜单管理'
    },
    {
        icon: 'none',
        id: 1,
        navigationList: [],
        order: 1,
        title: '导航管理'
    }
] as Menu[];
</script>
<style lang="less">
    
</style>