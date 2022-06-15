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
<script lang="ts">
import { Menu } from "@/models/menu";
import { defineComponent, PropType } from "vue";
import NavigationGroupVue from './navigation-group.vue';

export default defineComponent({
    components: {
        NavigationGroupVue
    },
    props: {
        menus: {
        type: Array as PropType<Array<Menu>>,
        default: () => []
        }
    }
})
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