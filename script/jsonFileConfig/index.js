const path = require('path');
const fs = require('fs');

/**
 * @description 读取json文件
 * @param { jsonPath: String } 需要读取的json文件地址 
 */
const readJson = (jsonPath) => {
    if(fs.existsSync(jsonPath)) {
        const content = fs.readFileSync(jsonPath, { encoding: 'utf-8' })
        console.log(JSON.parse(content));
    } else {
        console.error('error path!!!');
    }
}

const config = 
`{
    "a": 1,
    "b": 2    
}`;
/**
 * @description 创建json文件
 * @param { jsonPath: String } json 文件存放地址 
 * @param { jsonData: String } json 文件数据
 */
const writeJson = (jsonPath, jsonData) => {
    try {
        if(fs.existsSync(jsonPath)) {
            fs.unlinkSync(jsonPath);
        }
        fs.writeFileSync(jsonPath, jsonData);
        console.log('create success!');
    } catch (error) {
        console.error(error);
    }
    
}

// writeJson(path.join(__dirname, 'config.json'), config);
readJson(path.join(__dirname, 'config.json'));