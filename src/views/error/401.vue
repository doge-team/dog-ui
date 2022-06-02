<template>
    <div class="not-found-container">
        <div class="tips">
            <router-link to="/main/">
                <el-button>返回首页</el-button>
            </router-link>

            <p>哦豁，好像没得这个页面哦QAQ</p>
        </div>
        <div class="gif"></div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .not-found-container {
        height: 100vh;
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding-top: 200px;

        .gif {
            background-image: url(http://152.136.215.195:8082/404.gif);
            background-repeat: no-repeat;
            flex: 0 1 600px;
        }

        .tips {
            flex: 0 1 30%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
</style>