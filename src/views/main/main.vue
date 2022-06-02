<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideVue :menus="menus"></AsideVue>
      </el-aside>
      <el-container>
        <el-header style="background-color:antiquewhite">
          <HeaderVue></HeaderVue>
        </el-header>
        <el-main style="background-color: rgb(245, 245, 245);">
          <NavigationVue :menus="menus"></NavigationVue>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import AsideVue from '@/layout/layout-aside.vue';
import HeaderVue from '@/layout/layout-header.vue';
import NavigationVue from '@/components/main/navigation.vue';
import { getAllMenus } from '@/api/menu';
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';

export default defineComponent({
  components: {
    AsideVue,
    HeaderVue,
    NavigationVue
  },
  setup() {

    const state = reactive({
      menus: []
    })
    const fetchData = async () => {
        const res = await getAllMenus();
        state.menus = res.data.data;
    }
    onBeforeMount(() => {
      fetchData()
    })

    return {
      ...toRefs(state),
      fetchData
    }
  }
})
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
