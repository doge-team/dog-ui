/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-27 16:00:52
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 14:01:29
 * @FilePath: \dog-ui\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    allowedHosts: ['.natappfree.cc']
  },
})
