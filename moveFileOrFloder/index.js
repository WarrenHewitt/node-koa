const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

/**
 * @des 实验性API
 */
const fsPromises = require('fs').promises

/**
 * @des 命令传参
 * 执行 node ./moveFileOrFloder/index.js 2222 3333
 * 输出：
 * 0: C:\Program Files\nodejs\node.exe
 * 1: G:\GitHub\node-koa\moveFileOrFloder\index.js
 * 2: 2222
 * 3: 3333
 */
// process.argv.forEach((val, index) => {
//    console.log(`${index}: ${val}`);
// });


/**
 * @des 复制文件
 */
function copyFile(copiedPath, resultPath) {
    try {
        /**
         * @des 方式一
         */
        // fs.writeFileSync(resultPath, fs.readFileSync(copiedPath))
        /**
         * @des 方式二
         */
        fs.copyFileSync(copiedPath, resultPath)
        console.log('success');
    } catch (error) {
        console.log(error);
    }
    /**
     * @des 方式三
     */
    // fsPromises.copyFile(copiedPath, resultPath)
    // .then(() => {
    //     console.log('success');    
    // }).catch((err) => {
    //     console.log(err);
    // });
}
/**
 * @des 复制文件夹
 */
function copyFloder(copiedPath, resultPath) {
    /**
     * @des 方式一：利用子进程操作命令行方式
     */
    child_process.spawn('cp', ['-r', copiedPath, resultPath])

    /**
     * @des 方式二：
     */
}

/**
 * @des 删除文件
 */
function deleteFile(delPath) {
    try {
        if(fs.existsSync(delPath)) {
            fs.unlinkSync(delPath);    
        }
    } catch (error) {
        console.log('del error', error);
    }
}

/**
 * @des 删除文件夹
 */
function deleteFloder(delPath) {
    try {
        if(fs.existsSync(delPath)) {
            /**
             * @des 方式一: 只能删空文件
             */
            const delFn = function(address) {
                const files = fs.readdirSync(address)
                for (let i = 0; i < files.length; i++) {
                    const dirPath = path.join(address, files[i]) 
                    if(fs.statSync(dirPath).isDirectory()) {
                        delFn(dirPath)
                    } else {
                        deleteFile(dirPath)
                    }

                } 
                /**
                * @des 只能删空文件
                */
                fs.rmdirSync(address);  
            }
            delFn(delPath);
        }
    } catch (error) {
        console.error('del folder error', error);
    }
}

const type = process.argv[2]

/**
 * @des 请根据不同的条件传递参数
 */
if(type === 'copyFile') {
    copyFile('./moveFileOrFloder/p/a.txt', './moveFileOrFloder/p/b.txt')
}

if(type === 'copyFloder') {
    copyFloder('./moveFileOrFloder/p', './moveFileOrFloder/c')
}

if(type === 'delFile') {
    deleteFile('./moveFileOrFloder/p/b.txt')
}

if(type === 'delFloder') {
    deleteFloder('./moveFileOrFloder/c')
}

