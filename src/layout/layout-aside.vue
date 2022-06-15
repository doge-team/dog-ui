<template>
      <h5 class="mb-2">这里放图片和logo</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        default-active="0"
      >
        <el-menu-item 
        v-for="item in menus" 
        :key="item.id" 
        :index="item?.order.toString()"
        @click="navagationTo(item?.subRoute)"
        >
          <template #title>
            <img :src="item.icon" width="24" style="color: white;">
              {{item.title}}
            <span></span>
          </template>
        </el-menu-item>
      </el-menu>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { Menu } from '@/models/menu';
import router from '@/router';

const props = defineProps({ menus: Array as PropType<Menu[]> });

const { menus } = toRefs(props);

const navagationTo = (uri: string) => {
  router.push({ path: `/admin/${uri}` })
}

</script>

<style scoped>
  .el-menu--vertical {
    height: calc(100% - 61px);
    border: 0;
    padding: 0 20px;
  }

  .mb-2 {
    background-color: #545c64;
    margin: 0;
    height: 61px;
  }
</style>