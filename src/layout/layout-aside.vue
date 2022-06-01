<!--
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-27 16:28:28
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 14:04:54
 * @FilePath: \dog-ui\src\layout\layout-aside.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
      <h5 class="mb-2">这里放图片和logo</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      >
        <el-sub-menu v-for="item in menus" :key="item.id" :index="item.order">
          <template #title>
            <img :src="item.icon" width="24" style="color: white;">
              {{item.title}}
            <span></span>
          </template>
        </el-sub-menu>
      </el-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Menu } from '@/models/menu';

export default defineComponent({
  props: {
    menus: {
      type: [] as PropType<Array<Menu>>,
      default: () => []
    }
  }
})
</script>

<style >
  .el-menu {
    height: calc(100% - 61px);
    border: 0;
  }

  .mb-2 {
    background-color: #545c64;
    margin: 0;
    height: 61px;
  }
</style>