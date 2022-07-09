<template>
    <div class="navigation-container">
        <NavigationGroupVue 
        v-for="menu in menus" 
        :key="menu.id"
        :menu="menu"
        >
        </NavigationGroupVue>
    </div>
</template>
<script lang="ts" setup>
import { Menu } from "@/models/menu";
import { PropType, toRefs } from "vue";
import NavigationGroupVue from './navigation-group.vue';

const props = defineProps({ menus: Array as PropType<Array<Menu>> });
const { menus } = toRefs(props);
</script>
<style lang="less" scoped>
    .navigation-container {
        display: flex;
        flex-direction: column;
        &:not(:first-child) {
            margin-top: 10px;
        }
    }
</style>