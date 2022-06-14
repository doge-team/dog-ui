<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideVue :menus="menus"></AsideVue>
      </el-aside>
      <el-container>
        <el-header style="background-color:antiquewhite">
          <HeaderVue :user="state.user"></HeaderVue>
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
import { User } from '@/models/admin/user';
import { reactive, ref, toRef, toRefs } from 'vue';
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

const state = ref({user: new User('test','123')})
state.value.user.avatar = 'http://152.136.215.195:8082/dogUI/4ffd0c88-5f62-4a65-914c-beed4bb76258.jpeg'
</script>
<style lang="less">
    
</style>