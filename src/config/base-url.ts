/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-06-01 09:14:31
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 10:27:23
 * @FilePath: \dog-ui\src\config\base-url.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * test
 */
export const BaseUrlConfig = {
    development: {
      baseUrl: 'https://dogedoge.site/' // 测试接口域名
    },
    beta: {
      baseUrl: 'http://xxx.xxx.xxx.xxx:xxxx' // 测试接口域名
    },
    release: {
      baseUrl: 'http://xxx.xxx.xxx.xxx:xxxx' // 正式接口域名
    },
    production: {
      baseUrl: 'https://dogedoge.site/'
    }
  }