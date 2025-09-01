/*
 * @Author: Warren
 * @Date: 2025-09-01 10:09:41
 * @LastEditors: Warren
 * @LastEditTime: 2025-09-01 11:44:23
 * @FilePath: /node-koa/script/merge-file.js
 * @Description: 请填写文件说明
 */
// merge-folder-files-recursive.js
const fs = require("fs");
const path = require("path");

/**
 * 递归获取文件夹下的所有文件路径
 * @param {string} dir - 目录路径
 * @returns {Promise<string[]>}
 */
async function getAllFiles(dir) {
    let results = [];
    const list = await fs.promises.readdir(dir);

    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = await fs.promises.stat(filePath);

        if (stat.isDirectory()) {
            // 递归子目录
            const subFiles = await getAllFiles(filePath);
            results = results.concat(subFiles);
        } else {
            results.push(filePath);
        }
    }
    return results;
}

/**
 * 合并文件夹及子文件夹内所有文件到一个文件
 * @param {string} folderPath - 输入文件夹路径
 * @param {string} outputFile - 输出文件路径
 */
async function mergeFolderFiles(folderPath, outputFile) {
    try {
        let files = await getAllFiles(folderPath);

        // 排序，避免随机顺序
        files.sort();

        let content = "";
        for (const file of files) {
            const data = await fs.promises.readFile(file, "utf-8");
            content += data + "\n";
        }

        await fs.promises.writeFile(outputFile, content, "utf-8");
        console.log(`✅ 合并完成: ${outputFile}`);
    } catch (err) {
        console.error("❌ 合并出错:", err);
    }
}


// 示例调用
// mergeFolderFiles(path.join(__dirname, './software-copyright/layout'), "layout.txt");
// mergeFolderFiles(path.join(__dirname, './software-copyright/router'), "router.txt");
// mergeFolderFiles(path.join(__dirname, './software-copyright/errorCode'), "errorCode.txt");
mergeFolderFiles(path.join(__dirname, './software-copyright/func'), "func.txt");
