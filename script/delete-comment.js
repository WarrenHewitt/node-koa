/*
 * @Author: Warren
 * @Date: 2025-09-01 10:09:04
 * @LastEditors: Warren
 * @LastEditTime: 2025-09-01 11:37:35
 * @FilePath: /node-koa/script/delete-comment.js
 * @Description: 请填写文件说明
 */
const fs = require('fs').promises;
const path = require('path');

async function cleanFile(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const ext = path.extname(filePath);

    const cleaners = {
        '.js': c => c.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, ''),
        '.html': c => c.replace(/<!--[\s\S]*?-->/g, ''),
        '.css': c => c.replace(/\/\*[\s\S]*?\*\//g, ''),
        '.vue': c => c.replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '')
    };

    await fs.writeFile(filePath, cleaners[ext]?.(content) || content);
}

async function processDir(dir) {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        item.isDirectory() ? await processDir(fullPath) : await cleanFile(fullPath);
    }
}

// const dir = path.join(__dirname, './software-copyright/layout');
// const dir = path.join(__dirname, './software-copyright/router');
// const dir = path.join(__dirname, './software-copyright/errorCode');
const dir = path.join(__dirname, './software-copyright/func');

processDir(dir).catch(console.error);