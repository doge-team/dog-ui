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
            :navigation="navigation"
            @Click="onNavClick(navigation)"
            >
            </SingleNavigationVue>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { openTypeEnum } from "@/const/const-source";
import { Menu } from "@/models/menu";
import { Navigation } from "@/models/navigation";
import router from "@/router";
import { PropType, toRefs } from "vue";
import SingleNavigationVue from './single-navigation.vue';
const props = defineProps({ menu: Object as PropType<Menu> })
const { menu } = toRefs(props);

const onNavClick = (nav: Navigation) => {
    if(nav.openType === openTypeEnum.TARGET_REDIRECTION) {
        window.open(nav.link, '_blank');
    } else {
        router.push(nav.link);
    }
}
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