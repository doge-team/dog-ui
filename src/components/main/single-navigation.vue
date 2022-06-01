<template >
        <div class="single-container el-card is-hover-shadow">
            <div class="icon">
                <img :src="navigation.icon" width="24">
            </div>
            <div class="content">
                <div class="title overflowClip_1">
                    <strong>{{ navigation.title }}</strong>
                </div>
                <div class="description overflowClip_2 subtitle">
                    {{ navigation.description }}
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SectionVue from '../common/section.vue';
import { Navigation } from '@/models/navigation';

export default defineComponent({
    components: {
        SectionVue
    },
    props: {
        navigation: {
            type: null as PropType<Navigation>
        }
    }
})
</script>
<style lang="less">
    .single-container {
        display: flex;
        cursor: pointer;
        
        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
</style>