/*
 * @Author: Warren
 * @Date: 2025-07-24 16:20:33
 * @LastEditors: Warren
 * @LastEditTime: 2025-07-31 16:47:24
 * @FilePath: /node-koa/script/getLeafPath/findFile.js
 * @Description: 请填写文件说明
 */
const fs = require('fs');
const path = require('path');

const rootFolder = path.join(__dirname, '../websocket'); // 替换为你的目录路径

const excludeFolders = ['empty']

function findKeyUsed(keyword) {
    let found = false;
    function searchDirectorySync(currentPath) {
        if (found) return;

        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            if (found) break;

            const filePath = path.join(currentPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                if (!excludeFolders.find(key => (filePath.includes(key)))) {
                    searchDirectorySync(filePath);
                }
            } else if (stats.isFile()) {
                const data = fs.readFileSync(filePath, 'utf8');
                if (data.includes(keyword)) {
                    found = true;
                    console.log(`✅ 找到关键字 "${keyword}" 在文件中: ${file}`);
                    console.log(`路径: ${filePath}`);
                    return;
                }
            }
        }
    }

    // 开始查找
    searchDirectorySync(rootFolder);

    if (!found) {
        const txt = fs.readFileSync(path.join(__dirname, 'unusedKey.txt'))
        const newTxt = `${txt} \n ${keyword}`
        fs.writeFileSync(path.join(__dirname, 'unusedKey.txt'), newTxt)
    }
}

const arr = JSON.parse(fs.readFileSync(path.join(__dirname, './result.json')))
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    findKeyUsed(arr[i])
}
