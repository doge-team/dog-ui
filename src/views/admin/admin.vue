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
        id: 0,
        navigationList: [],
        order: 0,
        title: '导航管理'
    }
] as Menu[];
</script>
<style lang="less">
    
</style>