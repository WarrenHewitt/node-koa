/**
 * @des  process 是全局提供，不需要用 require 引入
 */

 /**
  * @des 使用process.env
  */
console.log('processEnv: ' + JSON.stringify(process.env.HOME));
process.env.HEWITT = 'hew'
console.log('auther: ' + process.env.HEWITT);