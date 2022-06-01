<template>
    <div class="group-container">
        <div class="group-title">
            <img :src="menu.icon" width="24">
            {{ menu.title }}
        </div>
        <div class="group-content">
            <SingleNavigationVue 
            v-for="navigation in menu.navigationList" 
            :key="navigation.id" 
            :navigation="navigation">
            </SingleNavigationVue>
        </div>

    </div>
</template>
<script lang="ts">
import { Menu } from "@/models/menu";
import { defineComponent, PropType } from "vue";
import SingleNavigationVue from './single-navigation.vue';

export default defineComponent({
    components: {
        SingleNavigationVue
    },
    props: {
        menu: {
            type: null as PropType<Menu>
        }
    }
})
</script>
<style lang="less">
    .group-container {
        display: flex;
        flex-direction: column;

        .group-content {
            display: flex;
            justify-content: space-around;
        }
    }
</style>