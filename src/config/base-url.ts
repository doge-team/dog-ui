/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-06-01 09:14:31
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 10:27:23
 * @FilePath: \dog-ui\src\config\base-url.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const BaseUrlConfig = {
    development: {
      baseUrl: 'http://152.136.215.195:10000/', // 测试接口域名,
      fileUrl: 'https://file.dogedoge.site'
    },
    production: {
      baseUrl: 'https://dogedoge.site/',
      fileUrl: 'https://file.dogedoge.site',
    }
  }