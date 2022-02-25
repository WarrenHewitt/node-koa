"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = exports.screen = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const screen = async (ctx) => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: './server/views/public/img/shot.png' });
    await browser.close();
    // ctx.response.body = 'success12'
};
exports.screen = screen;
const menu = async (ctx) => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    const span = await page.$('#hotsearch-refresh-btn > span');
    const data = await page.evaluate((span) => {
        return span.innerHTML;
    }, span);
    console.log(data);
    page.on('load', () => {
        console.log('page load');
    });
    // console.log('======end====');
    // const a = await page.waitForSelector('#hotsearch-refresh-btn > span');
    // const li = page.$eval('#hotsearch-refresh-btn > span', (l) => {
    //   console.log(l.innerHTML);
    // })
    // console.log('===', li.innerHTML);
    // page.on('load', () => {
    // })
    // await page.screenshot({ path: path.join('./server/views/public/img/shot.png') });
    return new Promise((resolve, reject) => {
        ctx.response.body = '获取完成';
        browser.close();
        resolve('');
    });
};
exports.menu = menu;
