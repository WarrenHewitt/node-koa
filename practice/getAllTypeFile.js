/*
 * @Description: 获取一个文件夹下，某个类型的所有文件, 并获取内容最为文件的新标题
 * @Author: warren
 * @LastEditors: warren
 * @Date: 2024-03-27 18:31:04
 * @LastEditTime: 2024-03-28 14:42:56
 */

const path = require('path')
const fs = require('fs')

const TYPES = ['md']
const EXCLUDE_FOLDERS = []

function recursionFloder(upRelatePath, fileName = '') {
    const _path = path.join(__dirname, upRelatePath)

    /* 判断是否是文件夹 */
    if (fs.statSync(_path).isDirectory()) {
        /* 返回文件夹下的 文件名(带后缀)和文件夹名 */
        const _files = fs.readdirSync(_path)

        _files.forEach(_fileOrFolderName => {
            if (EXCLUDE_FOLDERS.includes(_fileOrFolderName)) {
                return
            }
            recursionFloder(path.join(upRelatePath, _fileOrFolderName), _fileOrFolderName)
        })
    } else {
        const tempArray = fileName.split('.')
        const type = tempArray[tempArray.length - 1]

        /* 非 MD 文件 不处理 */
        if (TYPES.includes(type)) {
            const content = fs.readFileSync(path.join(__dirname, upRelatePath), 'utf-8')

            let newName = content.match(/(^|\r\n|\n)## (\S+)(\r\n|\n)/)

            if (newName && newName[2]) {
                newName = newName[2]
                fs.writeFileSync(
                    path.join(__dirname, './mdFiles', `${newName}.md`),
                    fs.readFileSync(path.join(__dirname, upRelatePath)),
                    'utf-8'
                )
            }
        }
    }
}

/* 传入要循环的文件夹 相对于当前文件的地址 */
recursionFloder('./src/')