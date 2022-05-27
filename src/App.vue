<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideVue></AsideVue>
      </el-aside>
      <el-container>
        <el-header style="background-color:antiquewhite">
          <HeaderVue></HeaderVue>
        </el-header>
        <el-main style="background-color:beige">这里放各种小项目链接</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideVue from './layout/layout-aside.vue';
import HeaderVue from './layout/layout-header.vue';
export default {
  name: 'App',
  components: {
    AsideVue,
    HeaderVue
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }
 .common-layout {
   height: 100%;
 }

 .el-container {
      height: 100%;
 }

 .el-header {
   padding: 0;
 }

 body {
   margin: 0;
 }
</style>
