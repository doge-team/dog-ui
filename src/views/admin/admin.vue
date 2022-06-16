<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="260px">
        <AsideVue :menus="menus"></AsideVue>
      </el-aside>
      <el-container>
        <el-header style="background-color:antiquewhite">
          <HeaderVue :user="state?.user"></HeaderVue>
        </el-header>
        <el-main style="background-color: rgb(245, 245, 245);">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { logoUrl } from '@/const/const-source';
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
import { User } from '@/models/admin/user';
import { Menu } from '@/models/menu';
import { ref } from 'vue';
const menus = [
    { 
        icon: 'none',
        id: 0,
        navigationList: [],
        order: 0,
        title: '菜单管理',
        subRoute: 'menu'
    },
    {
        icon: 'none',
        id: 1,
        navigationList: [],
        order: 1,
        title: '导航管理',
        subRoute: 'navigation'
    }
] as Menu[];

const state = ref({user: new User('test','123')})
state.value.user.avatar = logoUrl
</script>
<style lang="less" scoped>
    
</style>