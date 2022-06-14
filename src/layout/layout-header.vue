<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <div class="flex-grow" />
      <el-sub-menu>
        <template #title>
          <div class="avatar-container">
            <img :src="user.avatar" alt="头像" class="avatar" />
          </div>
        </template>

        <el-menu-item index="0-1">管理系统</el-menu-item>
        <el-menu-item index="0-2">退出登录</el-menu-item>
      </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { User } from "@/models/admin/user";
import { toRefs } from "vue";

const props = defineProps({ user: User })

const { user } = toRefs(props);
console.log(user.value)
// user.value.avatar = 'http://152.136.215.195:8082/dogUI/4ffd0c88-5f62-4a65-914c-beed4bb76258.jpeg'

</script>

<style lang="less">
    .el-menu--horizontal {
        height: 60px;
    }

    .flex-grow {
      flex-grow: 1;
    }

    .avatar-container {
      width: 56px;
    }
</style>
