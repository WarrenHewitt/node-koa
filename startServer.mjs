import process from 'process'
import util from 'util'
import { exec } from 'child_process'

const execPromise = util.promisify(exec)

/**
 * @desc /K 执行命令后不关闭窗口  /C 执行命令后关闭窗口 
 * @desc 监听ts文件的变化
 */
// exec('start cmd /K tsc -w', [], (err, stdout, stderr) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(`tsc success: ${stdout}`);
// });

// // 启动项目
// exec('start cmd /K nodemon server/app/app.js', [], (err, stdout, stderr) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(`nodemon success: ${stdout}`);
// });


const fn = async () => {
    await execPromise('exit', [], () => {
        console.log('finish');
    })
    
    process.exit()
}

fn()






