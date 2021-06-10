const { exec } = require('child_process');

// 启动项目
exec('start cmd /K nodemon server/app/app.js', [], (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`nodemon success: ${stdout}`);
});

/**
 * @desc /K 执行命令后不关闭窗口  /C 执行命令后关闭窗口 
 * @desc 监听ts文件的变化
 */
exec('start cmd /K tsc -w', [], (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`tsc success: ${stdout}`);
});



