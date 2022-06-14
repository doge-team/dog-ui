<!--
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-27 17:24:55
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-05-27 17:39:09
 * @FilePath: \dog-ui\src\layout\layout-header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
  >
    <div class="flex-grow" />
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

 export default defineComponent({

})
</script>

<style setup>
    .el-menu--horizontal {
        height: 60px;
    }

    .flex-grow {
      flex-grow: 1;
    }
</style>
