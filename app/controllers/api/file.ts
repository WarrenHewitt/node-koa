/**
 * @desc 文件处理相关操作
 */
import fs from 'fs'
import path from 'path'
import dayJs from 'dayjs'


/**
 * @desc 单页面路由实现
 */
export function renderSPA(ctx: any, next: Function) {
    /**
     * 路由中使用/:paramsName,可以用ctx.params.paramsName获取参数
     */
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./server/views/html/singlePageRoute.html');

    return next();
}

/**
 * @desc 根据获取的参数渲染 views/html 中的 html 文件
 */
export function renderHtml(ctx: any, next: Function) {
    const pages = ['indexedDB', 'a']
    let name = ctx.params.htmlFileName 

    name = pages.indexOf(name) > -1 ? name : pages[0]

    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(`./server/views/html/${name}.html`);

    return next();
}

/**
 * @desc 保存通过base64 方式传过来的图片
 */
export const upBase64 = (ctx: any) => {
    const data = ctx.request.body;
    const base64 = data.data;
    const buffer = new Buffer(base64, 'base64');
    fs.writeFile(`files/a.txt`, buffer, (err: any) => {
        if (err) throw err;
        console.log('saved!');
    })

    ctx.body = 'ok'
}

/**
 * @desc 保存通过formData 方式传过来的图片
 */
export const upFormData = (ctx: any) =>  {
    const data = ctx.request.body.files.data;
    const savePath = path.join(`./files`, data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)

    console.log(reader.pipe(writer))
    ctx.body = 'http://localhost:1112/' + data.name 
}

/**
 * @desc 接收上传的excel等文件
 */
export const uploadFile = (ctx: any, next: Function) =>  {
    console.log(ctx);
    // const data = ctx.request.body.file.data;
    // const savePath = path.join(`./`, data.name)
    // const reader = fs.createReadStream(data.path)
    // const writer = fs.createWriteStream(savePath)

    // // ctx.body = 'http://localhost:1112/' + data.name
    // console.log(reader.pipe(writer), savePath)
    // ctx.body = 'http://localhost:1112/' + data.name 
    ctx.body = 'http://localhost:1112/' 
    next()
}

/**
 * @desc 更新data/data.json文件中的数据
 */
export const updateFileContent = async(ctx: any) =>  {
    const { company, product, change } = ctx.request.body
    const updateData = (data: string) => {
        const database = JSON.parse(data) 
        const item = database[company][product]
        const oldTotal = item[item.length -1] ? item[item.length -1].total : 0 
        database[company][product].push({
            total: oldTotal + change,
            change,
            date: dayJs(Date()).format('YYYY-MM-DD HH:mm:ss')
        })

        return JSON.stringify(database, null, 4)
    }
    
    try {
        /**
         * 使用同步方法
         */
        const fileData = fs.readFileSync(path.join('./server/data/data.json'), 'utf8')
        fs.writeFileSync(path.join('./server/data/data.json'), updateData(fileData), 'utf8') 
        ctx.response.body = 'success'  
        
    } catch (error) {
        ctx.response.body = 'error'  
        console.log(error);
    }
}

