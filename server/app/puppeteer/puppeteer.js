"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const screen = async () => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: '../view/public/aexample.png' });
    await browser.close();
};
exports.screen = screen;
