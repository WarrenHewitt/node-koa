const process = require('process')
const util= require('util')
const { exec } = require('child_process')

/* 利用工具函数实现异步操作 */
const execPromise = util.promisify(exec)

const fn = async () => {
    /**
     * @desc /K 执行命令后不关闭窗口  /C 执行命令后关闭窗口 
     * @desc 监听ts文件的变化
     */
    execPromise('start cmd /K tsc -w', [], (err, stdout, stderr) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(`tsc success: ${stdout}`); 
    });
    
    // 启动项目
    execPromise('start cmd /K nodemon server/app/app.js', [], (err, stdout, stderr) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(`nodemon success: ${stdout}`);
    });
    
    setTimeout(() => {
        console.log('finish');
        process.exit()
    }, 3000);
}

fn()






