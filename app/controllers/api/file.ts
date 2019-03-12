import fs from 'fs'
import path from 'path'

/**
 * @desc 单页面路由实现
 */
export function renderSPA(ctx: any, next: Function) {
    // console.log('/:path', ctx.params.path);
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./server/views/html/singlePageRoute.html');

    return next();
}

/**
 * @desc 根据获取的参数渲染 views/html 中的 html 文件
 */
export function renderHtml(ctx: any, next: Function) {
    const pages = ['indexedDB']
    let name = ctx.params.htmlFileName 

    name = pages.indexOf(name) > -1 ? name : pages[0]

    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(`./server/views/html/${name}.html`);

    return next();
}

// 保存通过base64 方式传过来的图片
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

// 保存通过formData 方式传过来的图片
export const upFormData = (ctx: any) =>  {
    const data = ctx.request.body.files.data;
    const savePath = path.join(`./files`, data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)

    // ctx.body = 'http://localhost:1112/' + data.name
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


