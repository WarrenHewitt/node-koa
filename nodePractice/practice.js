/**
 * 使用process.env
 */
console.log('processEnv: ' + JSON.stringify(process.env.HOME));
process.env.HEWITT = 'hew'
console.log('auther: ' + process.env.HEWITT);