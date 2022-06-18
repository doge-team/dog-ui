<template >
        <div class="single-container el-card is-hover-shadow">
            <div class="icon">
                <img :src="navigation.icon" width="54">
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
import { Navigation } from '@/models/navigation';

export default defineComponent({
    components: {
    },
    props: {
        navigation: {
            type: null as PropType<Navigation>
        }
    }
})
</script>
<style lang="less" scoped>
    .single-container {
        display: flex;
        cursor: pointer;

        .icon {
            img {
                float: left;
                display: block;
                margin-right: 10px;
                border-radius: 50px;
            }
        }
        
        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
</style>