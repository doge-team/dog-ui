<!--
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-31 08:53:52
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-05-31 17:35:22
 * @FilePath: \dog-ui\src\views\main\main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
export default {
  name: 'App',
  components: {
    AsideVue,
    HeaderVue
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
  }
  #app {
    height: 100vh;
    .common-layout {
      height: 100%;
    }

    .el-header {
      padding: 0;
    }

    .el-container {
      height: 100%;
    }
  }







</style>
