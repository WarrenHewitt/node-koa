/*
 * @LastEditTime: 2022-11-08 15:51:22
 */
const { Client } = require('ssh2');

const conn = new Client();

conn.on('ready', (err, stream) => {
    console.log('Client :: ready');
    if(err) {
        console.log(err);
        conn.end
    }

    conn.sftp((err, sftp) => {
        if (err) throw err;
        /* 读取文件夹中的内容 */
        sftp.readdir('/ssh-test', (err, list) => {
            if (err) throw err;
            list.sort((a,b) => { // 按文件名升序
                if(a.filename > b.filename) { return 1 } 
                else if (a.filename === b.filename) { return 0 } 
                else { return -1 }
            })
            console.table(list);
            conn.end();
        });
    });
}).connect({
    host: '192.168.40.128',
    port: 22,
    username: 'hew',
    password: '123456'
});