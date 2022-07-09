<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
  >
    <div class="flex-grow" />
      <el-sub-menu v-if="!!token" index="0">
        <template #title>
          <div class="avatar-container">
            <el-avatar :size="50" :src="user?.profilePath" />
          </div>
        </template>

        <el-menu-item index="/admin" >管理系统</el-menu-item>
        <el-menu-item index="0-2" @click="logout">退出登录</el-menu-item>
      </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { routeWhitList } from "@/const/route";
import router from "@/router";
import { userStoreModule } from "@/store/modules/user";
import { getToken, getUser } from "@/utils/cookies";
import { computed } from "@vue/reactivity";
import { ElMessage } from "element-plus";

const user = computed(() => getUser());
const token = computed(() => getToken());
const logout = () => {
  userStoreModule.logout();
  if(!routeWhitList.includes(router.currentRoute.value.path)) {
    ElMessage.error("请登录后再访问此页面");
    router.push({ path: '/main' });
  }
}
</script>

<style lang="less" scoped>
    .el-menu--horizontal {
        height: 60px;
    }

    .flex-grow {
      flex-grow: 1;
    }

    .avatar-container {
      width: 56px;

      .el-avatar {
        background-color: white;
      }
    }

    .el-menu.el-menu--popup {
      min-width: 120px;
    }
</style>
