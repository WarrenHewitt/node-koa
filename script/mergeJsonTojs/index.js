/*
 * @Description: 
 * @Author: warren
 * @LastEditors: warren
 * @Date: 2023-11-22 10:24:21
 * @LastEditTime: 2023-11-22 11:57:03
 */
const fs = require('fs');
const path = require('path');


/**
 * @description 读取json文件
 * @param { jsonPath: String } 需要读取的json文件地址 
 */
const readJson = (jsonPath) => {
    const result = {
        en: {},
        zh: {}
    }

    if (fs.existsSync(jsonPath)) {
        /* 获取地址下的文件和文件夹的名称集合，文件名包含后缀 */
        const fileAndFolder = fs.readdirSync(jsonPath);

        fileAndFolder.forEach(name => {
            const files = fs.readdirSync(path.join(jsonPath, name));
            // console.log("🚀 ~ file: index.js:28 ~ readJson ~ files:", files)
            files.forEach((file) => {
                const filePureName = file.split('.')[0];
                let fileContent = fs.readFileSync(path.join(jsonPath, name, file), { encoding: 'utf-8' })
                fileContent = JSON.parse(fileContent)

                const key = Object.keys(fileContent)[0]
                if (result[filePureName][key]) {
                    console.error('唯一键值有冲突', file);
                } else {
                    result[filePureName][key] = fileContent[key]
                }
                
            })
        });

        // const resultString = `window.i18nTranslate=${JSON.stringify(result)}`
        const resultString = `export default ${JSON.stringify(result)}`
        fs.writeFileSync(path.join(__dirname , './resultJs/result.js'), resultString, 'utf-8')

        // console.log(JSON.parse(content));
    } else {
        console.error('文件夹不存在！');
    }
}
// 
// readJson(path.join(__dirname))

readJson(path.join(__dirname, './json'));


