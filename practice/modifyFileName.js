/*
 * @Description: 修改指定文件夹下的所有文件的名称  将带-的名称换成小驼峰
 * @Author: warren
 * @LastEditors: warren
 * @Date: 2024-03-06 16:27:32
 * @LastEditTime: 2024-03-07 09:31:45
 */
const path = require('path');
const fs = require('fs');

/* 只允许修改的文件格式 */
const TYPES = ['md']
const EXCLUDE_FOLDERS = ['.vuepress', 'sh']

function getFileAndFloder(basePath = '', fileOrFolderName = '') {
    const _path = path.join(__dirname, basePath, fileOrFolderName)

    /* 判断是否是文件夹 */
    if (fs.statSync(_path).isDirectory()) {
        /* 返回文件夹下的 文件名(带后缀)和文件夹名 */
        const _files = fs.readdirSync(_path);

        _files.forEach(_fileOrFolderName => {
            if (EXCLUDE_FOLDERS.includes(_fileOrFolderName)) {
                return
            }
            getFileAndFloder(path.join(basePath, fileOrFolderName), _fileOrFolderName);
        });
    } else {
        const tempArray = fileOrFolderName.split('.')
        const type = tempArray[tempArray.length - 1];

        /* 非 MD 文件 不处理 */
        if (!TYPES.includes(type)) {
            console.log(tempArray);
            return
        }

        const fileName = tempArray.slice(0, tempArray.length - 1).join('')

        if (/-/.test(fileName)) {
            let newName = fileName.split('-')
            newName = newName.map((item, index) => {
                if (index > 0) {
                    item = item.charAt(0).toUpperCase() + item.slice(1)
                }
                return item
            })
            newName = newName.join('')
            const oldPath = _path
            const newPath = path.join(__dirname, basePath, `${newName}.${type}`)
            fs.renameSync(oldPath, newPath)
        }
    }
}

/* 传入要循环的文件夹 相对于当前文件的地址 */
getFileAndFloder('./docs/')
