<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <div class="flex-grow" />
      <el-sub-menu v-if="!!token">
        <template #title>
          <div class="avatar-container">
            <el-avatar :size="50" :src="user?.avatar" />
          </div>
        </template>

        <el-menu-item index="0-1" ><router-link to="/admin">管理系统</router-link> </el-menu-item>
        <el-menu-item index="0-2" @click="logout">退出登录</el-menu-item>
      </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { routeWhitList } from "@/const/route";
import { User } from "@/models/admin/user";
import router from "@/router";
import { userStoreModule } from "@/store/modules/user/user";
import { ElMessage } from "element-plus";
import { reactive, toRefs } from "vue";

const props = defineProps({ user: User })

const { user } = toRefs(props);

const { token } = reactive({ token: userStoreModule.token });

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
    }

    .el-menu.el-menu--popup {
      min-width: 120px;
    }
</style>
