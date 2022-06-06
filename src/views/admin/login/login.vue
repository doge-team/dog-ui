<template>
    <div class="login-container">
        <div class="login-box">
            <div class="img"></div>
            <div class="login-form">
                <p>登录</p>
                <el-row>
                    <el-input
                        v-model="input2"
                        class="w-50 m-2"
                        placeholder="Type something"
                        :prefix-icon="Search"
                    />
                </el-row>
                <el-row></el-row>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    
</style>