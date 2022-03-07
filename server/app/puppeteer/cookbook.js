"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookbook = void 0;
const fs_1 = __importDefault(require("fs"));
const puppeteer_1 = __importDefault(require("puppeteer"));
/**
 * 获取 cookbook
 * @param ctx
 */
const cookbook = async (ctx) => {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    page.on('error', err => {
        console.log(err);
    });
    page.on('console', msg => {
        for (let i = 0; i < msg.args().length; ++i) {
            console.log(`${i}: ${msg.args()[i]}`);
        }
    });
    await page.goto('https://juejin.cn/frontend', {
        timeout: 30 * 1000,
        waitUntil: 'load'
        // waitUntil: [
        //   'load',              //等待 “load” 事件触发
        //   'domcontentloaded',  //等待 “domcontentloaded” 事件触发
        //   'networkidle0',      //在 500ms 内没有任何网络连接
        //   'networkidle2'       //在 500ms 内网络连接个数不超过 2 个
        // ]
    });
    await page.waitForSelector('#juejin > div.view-container.container > main');
    await page.screenshot({ path: './shot.png' });
    const liData = await page.evaluate(() => {
        const lis = document.querySelectorAll('#juejin > div.view-container.container > main > div > div > div > div > div > div > div > li');
        console.log(lis.length);
        const news = [];
        lis.forEach((ele, i) => {
            let title = ele.querySelector('.title-row a');
            title = title ? title.innerHTML : '';
            console.log(title);
            let abstract = ele.querySelector('.abstract a');
            abstract = abstract ? abstract.innerHTML : '';
            news.push({ title, abstract });
        });
        return news;
    });
    /* 写入JSON文件 */
    fs_1.default.writeFileSync('./baidu.json', JSON.stringify(liData, null, 4), 'utf-8');
    await browser.close();
    ctx.body = 'success';
};
exports.cookbook = cookbook;
