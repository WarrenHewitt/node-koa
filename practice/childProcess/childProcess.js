/**
 * @des  child_process  provide the ability to spawn(生成) child process
 * 1. exec 和 execFile 是对 spawn 的封装
 * 2. exec比spawn多了一些默认的option
 */

/**
 * @des child_process.exec  参见：`/startServer.js`
 */

const { spawn, exec } = require('child_process')
/**
 * @des child_process.spawn
 * 1. 第一个参数为命令，第二个参数为，参数数组
 */
// const ls = spawn('mkdir', ['sss']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


exec('mkdir sd', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

/**
 * @des 不用先衍生一个 shell，它指定可执行的file直接衍生为一个新进程，这使得它比exec()更高效
 */
const child = execFile('node', ['--version'], (err, stdout, stderr) => {
    console.log(stdout);
})



