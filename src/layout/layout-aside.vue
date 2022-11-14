<template>
  <div class="aside-container">
    <h5 class="mb-2" @click="navagationToMain">
      <div class="logo-container">
        <div class="logo">
          <el-avatar :size="50" :src="logo" style="background-color: #545c64;"/>
        </div>
        <div class="logo-word">
          <p class="main-title">Doge小站</p>
          <p class="sub-title">思想无极限</p>
        </div>
      </div>
    </h5>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
      default-active="0">
      <el-menu-item v-for="item in menus" :key="item.id" :index="item?.order.toString()"
        @click="onMenuClick(item?.subRoute)">
        <template #title>
          <img :src="item.icon" width="24" style="color: white;">
          {{ item.title }}
          <span></span>
        </template>
      </el-menu-item>
    </el-menu>
    <div style="
    position: absolute;
    bottom: 0;
    color: white;
    align-self: center;
    ">
      <span>备案号</span> 
      <a href="https://beian.miit.gov.cn/" style="margin-left: 4px;" target="_blank">蜀ICP备2022017746号-1</a>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { Menu } from '@/models/menu';
import router from '@/router';
import { logoUrl } from '@/const/const-source';
import { useLinkHooks } from '@/hooks/link';

const logo = logoUrl;
const props = defineProps({ menus: Array as PropType<Menu[]> });

const { menus } = toRefs(props);

const { onMenuClick } = useLinkHooks();

const navagationToMain = () => {
    router.push({ path: '/main' })
}

</script>

<style scoped lang="less">
.el-menu--vertical {
  border: 0;
  padding: 0 20px;
}

.aside-container {
  background-color: #545c64;
  height: 100%;
  display: flex;
  flex-direction: column;

  li.el-menu-item {
    border-bottom: 1px solid #606d7a;
  }
}

.mb-2 {
  color: white;
  margin: 0;
  height: 61px;
  padding-top: 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid #606d7a;
  cursor: pointer;

  .logo-container {
    padding-left: 32px;

    * {
      font-family: cartoon;
    }

    display: flex;
    .logo-word {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 8px;

      p {
        margin: 0;
      }

      .main-title {
        font-size: 28px;
      }

      .sub-title {
        font-size: 15px;
        margin-top: 8px;
      }
    }
  }

}
</style>