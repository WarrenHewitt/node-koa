const fs = require('fs');
const path = require('path');

/* 
    第一轮递归 找到所有的文件地址 保存到一个数组中
    循环文件地址，获取内容，进行匹配，记录有匹配到的地址
    过滤找到未被引用的文件

    递归所有的文件，拿到引用的所有文件地址，保存到一个 Set 中
    递归所有的文件，拿到所有的文件地址，和 Set 进行对比，找出未被引用的文件
*/

function findUnusedFiles() {
    const srcDir = path.join(__dirname, 'src');
    const usedFiles = new Set();
    const actualFiles = [];
    const unusedFiles = [];

    /* 支持的扩展名 */
    const supportedExtensions = (extensionName) => {
        return ['.js', '.vue'].includes(extensionName);
    }

    const usedFilesAdd = (filePath) => {
        /* 
            filePath 的值可能是以下几种情况：
            1. D:\xxx\xxx\src\xxx.vue
            2. D:\xxx\xxx\src\xxx.js
            3. D:\xxx\xxx\src\xxx
        */
        const ext = path.extname(filePath);
        if (ext) {
            usedFiles.add(filePath);
        } else {
            usedFiles.add(filePath + '.js');
            usedFiles.add(filePath + '.vue');
            usedFiles.add(`${filePath}\\index.js`);
            usedFiles.add(`${filePath}\\index.vue`);
        }
    }


    console.log('开始扫描 src 目录中的未使用文件...');

    // 扫描所有 js 和 vue 文件  拿到每个文件中引入的文件
    function scanFiles(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                scanFiles(filePath);
            } else if (stat.isFile() && supportedExtensions(path.extname(file))) {
                /* 保存真实文件，减少二次递归 */
                actualFiles.push(filePath);

                // 读取文件内容，收集导入的文件
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    const importRegex = /import\s+(?:.*\s+from\s+)?['"]([^'"]+)['"]/g;
                    let match;

                    while ((match = importRegex.exec(content)) !== null) {
                        let importedStr = match[0];
                        let importedPath = match[1];

                        // 处理别名，不是以下两种情况的 就是引入的第三方包
                        if (importedPath.startsWith('@/')) {
                            /* 得到的文件格式 D:\xxx\xxx\src\xxx.vue */
                            /* 直接将 @/ 替换为 src 目录所在的绝对地址 然后拼接获取到的引入文件的地址 */
                            importedPath = path.join(srcDir, importedPath.substring(2));
                        } else if (importedPath.startsWith('.')) {
                            /* 得到的文件格式 D:\xxx\xxx\src\xxx.vue */
                            /* 拿到当前文件的绝对路径目录，然后拼接获取到的引入文件的地址 */
                            importedPath = path.resolve(path.dirname(filePath), importedPath);
                        }

                        usedFilesAdd(importedPath)
                    }
                } catch (error) {
                    console.warn('读取文件失败:', filePath);
                }
            }
        });
    }

    // 找到未使用的文件
    function checkUnusedFiles() {
        actualFiles.forEach(file => {
            if (!usedFiles.has(file)) {
                unusedFiles.push(file);
            }
        });
    }

    // 执行扫描
    scanFiles(srcDir);
    checkUnusedFiles();

    // 输出结果
    console.log('\n=== 扫描结果 ===');
    if (unusedFiles.length === 0) {
        console.log('🎉 没有找到未使用的文件！');
    } else {
        console.log('未使用的文件:');
        unusedFiles.forEach(file => {
            const relativePath = path.relative(__dirname, file);
            console.log(' -', relativePath);
        });
        console.log(`\n总共找到 ${unusedFiles.length} 个未使用的文件`);
    }

    return unusedFiles;
}

// 运行扫描
findUnusedFiles();