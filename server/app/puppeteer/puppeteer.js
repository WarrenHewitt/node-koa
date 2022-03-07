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
/**
 * 爬虫示例
 * @param ctx
 * @returns
 */
const menu = async (ctx) => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    /**
     * 需要放在 page.goto 之前
     */
    page.on('load', () => {
        console.log('page load');
    });
    //监听浏览器报错
    page.on('pageerror', pageErr => {
        console.log(pageErr);
    });
    //监听node报错
    page.on('error', err => {
        console.log(err);
    });
    /**
     * 必须监控console  否者在浏览器输出 console 无法在 node 控制台输出
     */
    page.on('console', msg => {
        for (let i = 0; i < msg.args().length; ++i)
            console.log(`${i}: ${msg.args()[i]}`);
    });
    await page.goto('https://www.baidu.com');
    await page.$eval('#hotsearch-refresh-btn > span', (list) => {
        // console.log('name---', list.innerHTML);
    });
    /**
     * 通过evaluate函数执行自定义的js代码获取要爬取的数据
     * evaluate 可以传递 ElementHandle
     * page.evaluate 意为在浏览器环境执行脚本，可传入第二个参数作为句柄，而 page.$eval 则针对选中的一个 DOM 元素执行操作
     * 只能执行浏览器可执行的js代码 引入的模块不能在此执行
     */
    const span = await page.$('#hotsearch-refresh-btn > span');
    const data = await page.evaluate((span) => {
        return span.innerHTML;
    }, span);
    console.log(data);
    return new Promise((resolve, reject) => {
        ctx.response.body = '获取完成';
        browser.close();
        resolve('');
    });
};
exports.menu = menu;
