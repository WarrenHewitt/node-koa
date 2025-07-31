const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const fsEx = require('fs-extra')

/**
 * @des 实验性API
 */
const fsPromises = require('fs').promises

/**
 * @des 命令传参
 * 执行 node ./moveFileOrFolder/index.js 2222 3333
 * 输出：
 * 0: C:\Program Files\nodejs\node.exe
 * 1: G:\GitHub\node-koa\moveFileOrFolder\index.js
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
    copiedPath = path.join(__dirname, copiedPath)
    resultPath = path.join(__dirname, resultPath)

    try {
        /**
         * @des 方式一
         */
        // fs.writeFileSync(resultPath, fs.readFileSync(copiedPath))
        /**
         * @des 方式二
         */
        // fs.copyFileSync(copiedPath, resultPath)
        console.log('success');
    } catch (error) {
        console.log(error);
    }
    /**
     * @des 方式三
     */
    fsPromises.copyFile(copiedPath, resultPath)
        .then(() => {
            console.log('success');
        }).catch((err) => {
            console.log(err);
        });
}
/**
 * @des 复制文件夹
 */
function copyFolder(copiedPath, resultPath, direct) {
    if(!direct) {
        copiedPath = path.join(__dirname, copiedPath)
        resultPath = path.join(__dirname, resultPath)
    }

    function createDir (dirPath) {
        fs.mkdirSync(dirPath)        
    }

    if (fs.existsSync(copiedPath)) {
        createDir(resultPath)
        /**
         * @des 方式一：利用子进程操作命令行方式
         */
        // child_process.spawn('cp', ['-r', copiedPath, resultPath])

        /**
         * @des 方式二：
         */
        /* 获取地址下的文件和文件夹的名称集合，文件名包含后缀 */
        const files = fs.readdirSync(copiedPath, { withFileTypes: true });
        for (let i = 0; i < files.length; i++) {
            const cf = files[i]
            const ccp = path.join(copiedPath, cf.name)
            const crp = path.join(resultPath, cf.name)  
            if (cf.isFile()) {
                /**
                 * @des 创建文件,使用流的形式可以读写大文件
                 */
                const readStream = fs.createReadStream(ccp)
                const writeStream = fs.createWriteStream(crp)
                readStream.pipe(writeStream)
            } else {
                try {
                    /**
                     * @des 判断读(R_OK | W_OK)写权限
                     */
                    fs.accessSync(path.join(crp, '..'), fs.constants.W_OK)
                    copyFolder(ccp, crp, true)
                } catch (error) {
                    console.log('folder write error:', error);
                }
            }
        }
    } else {
        console.log('do not exist path: ', copiedPath);
    }
}

/**
 * @des 删除文件
 */
function deleteFile(delPath, direct) {
    delPath = direct ? delPath : path.join(__dirname, delPath)
    try {
        /**
         * @des 判断文件或文件夹是否存在
         */
        if (fs.existsSync(delPath)) {
            fs.unlinkSync(delPath);
        } else {
            console.log('inexistence path：', delPath);
        }
    } catch (error) {
        console.log('del error', error);
    }
}

/**
 * @des 删除文件夹
 */
function deleteFolder(delPath) {
    delPath = path.join(__dirname, delPath)

    try {
        if (fs.existsSync(delPath)) {
            const delFn = function (address) {
                /* 获取地址下的文件和文件夹的名称集合，文件名包含后缀 */
                const files = fs.readdirSync(address)
                for (let i = 0; i < files.length; i++) {
                    const dirPath = path.join(address, files[i])
                    /** fs.statSync(dirPath) 返回 fs.Stats 的实例，该实例可以调用 isDirectory 方法  */
                    if (fs.statSync(dirPath).isDirectory()) {
                        delFn(dirPath)
                    } else {
                        deleteFile(dirPath, true)
                    }
                }
                /**
                * @des 只能删空文件
                */
                fs.rmdirSync(address);
            }
            delFn(delPath);
        } else {
            console.log('do not exist: ', delPath);
        }
    } catch (error) {
        console.log('del folder error', error);
    }
}

const type = process.argv[2]

function execute() {
    /**
     * @des 请根据不同的条件传递参数
     */
    if (type === 'copyFile') {
        copyFile('./p/a.txt', './c/k.txt')
    }

    if (type === 'copyFolder') {
        copyFolder('./p', './a')
    }

    if (type === 'delFile') {
        deleteFile('./c/ss.txt')
    }

    if (type === 'delFolder') {
        deleteFolder('./a')
    }
}

execute()


/**
 * @des fs-extra 包实现
 * api参考: https://github.com/jprichardson/node-fs-extra
 */

function fsExtra() {
    async function copy() {
        try {
            await fsEx.copy(path.join(__dirname + '/p'), path.join(__dirname + '/d'))
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    }

    copy()
}

//  fsExtra()
