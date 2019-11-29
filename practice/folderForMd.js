const path = require('path');
const fs = require('fs');

let dir = '```\n';

const spaceLength = (deep) => {
    let str = ' ';
    return str.repeat(deep * 4);
}

const getFileAndFloder = (_path, name, deep) => {
    if(['node_modules', 'dist', 'build', 'server', '.git'].includes(name)) return;
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
    dir += '```\n';
    fs.writeFileSync(path.join('./dirMd.md'), dir);
}

/** 获取当前文件夹名称 */
const baseName = path.basename(__dirname);

getFileAndFloder(path.join(__dirname), baseName, 0);

writeFile();
