/*
 * @Description: 根据文件内容 生成 md5 值，如果内容一样，值就会一样
 * @Author: warren
 * @LastEditors: warren
 * @Date: 2024-01-05 11:00:34
 * @LastEditTime: 2024-01-08 17:23:12
 */

function getFileHash () {
    const path = require('path');
    const fs = require('fs');
    const crypto = require('crypto');

    const buffer = fs.readFileSync(path.join(__dirname, 'ttt.txt'));

    
    const hash = crypto.createHash('md5');
    hash.update(buffer, 'utf8');
    const md5 = hash.digest('hex');
    
    /* 修改文件名称 */
    fs.renameSync(path.join(__dirname, 'ttt.txt'), path.join(__dirname, `ttt-${md5}.txt`))
    
    console.log(md5);
}

getFileHash()


// 96e79218965eb72c92a549dd5a330112
// 3a62733a934129cc50b122f16b0f78e1
// 96e79218965eb72c92a549dd5a330112