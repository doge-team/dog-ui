<template >
    <SectionVue>
        <div class="single-container">
            <div class="icon">
                <img :src="navigation.icon" width="24">
            </div>
            <div class="content">
                <div class="title">
                    {{ navigation.title }}
                </div>
                <div class="description">
                    {{ navigation.description }}
                </div>
            </div>
        </div>
    </SectionVue>
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

        .content {
            display: flex;
            flex-direction: column;
        }
    }
</style>