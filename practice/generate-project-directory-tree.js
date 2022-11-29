/*
 * @LastEditTime: 2022-11-22 15:03:57
 */
/**
 * @describe 生成当前项目的目录树, 该文件必须放在项目跟目录下执行
 * @return 生成一个 directory-tree.md 的文件
 */
const path = require('path');
const fs = require('fs');

/* 以下文件夹不做处理 */
const EXCLUDE_FOLDER = ['node_modules', 'dist', 'build', 'server', '.git']
let dir = '```\n';

const spaceLength = (deep) => {
    let str = ' ';
    return str.repeat(deep * 4); // 返回空格数
}

const getFileAndFloder = (_path, name, deep) => {
    if(EXCLUDE_FOLDER.includes(name)) return;
	/* 判断是否是文件夹 */
    if(fs.statSync(_path).isDirectory()) {

        const _files = fs.readdirSync(_path);

        dir += `${ spaceLength(deep) }|- ${name}\n`;

        _files.forEach(value => {
            getFileAndFloder(path.join(_path, value), value, deep + 1);
        });
    } else {
        dir += `${ spaceLength(deep) }|- ${name}\n`;
    }
}

function writeFile() {
    dir = '## 项目目录结构\n' + dir;
    dir += '```\n';
    fs.writeFileSync(path.join('./directory-tree.md'), dir);
}

/** 获取当前文件夹名称 */
const baseName = path.basename(__dirname);

getFileAndFloder(path.join(__dirname), baseName, 0);

writeFile();
