<template>
    <div class="group-container ">
        <h4 class="group-title">
            <img :src="menu.icon" width="24">
            {{ menu.title }}
        </h4>
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
<style lang="less" scoped>
    .group-container {
        display: flex;
        flex-direction: column;

        .group-content {
            display: flex;
            margin-top: 12px;
            .single-container {
                width: 15%;
                min-width: 150px;
                height: 54px;
                padding: 15px;

                &:not(:first-child) {
                    margin-left: 24px;
                }
            }
        }
    }
</style>