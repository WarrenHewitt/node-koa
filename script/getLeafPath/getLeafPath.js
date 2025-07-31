/*
 * @Author: Warren
 * @Date: 2025-07-24 15:40:36
 * @LastEditors: Warren
 * @LastEditTime: 2025-07-24 17:44:41
 * @FilePath: /node-koa/script/getLeafPath/getLeafPath.js
 * @Description: 获取子节点路径
 */

const fs = require('fs')
const path = require('path')

function getLeafPaths(obj) {
    const paths = [];

    function walk(current, path = '') {
        if (typeof current === 'object') {
            for (const key in current) {
                walk(current[key], path ? `${path}.${key}` : key);
            }
        } else {
            paths.push(path);
        }
    }

    walk(obj);
    return paths;
}

// const data = JSON.parse(fs.readFileSync(path.join(__dirname, './data.json')))

// fs.writeFileSync(path.join(__dirname, 'result.json'), JSON.stringify(getLeafPaths(data), null, 4), 'utf-8')


const a = fs.readFileSync(path.join(__dirname, 're.txt'))
const b = `${a} \n ko.ztz`
fs.writeFileSync(path.join(__dirname, 're.txt'), b)