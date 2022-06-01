<!--
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-06-01 11:44:36
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 14:06:51
 * @FilePath: \dog-ui\src\components\common\section.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="section">
        <slot></slot>
    </div>
</template>
<script>
import { defineComponent } from "vue";

    export default defineComponent({})
</script>
<style lang="less">
    .section {
        background-color: #fff;
    }
</style>