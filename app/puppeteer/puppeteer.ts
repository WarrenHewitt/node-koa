import path from 'path'
import puppeteer from 'puppeteer'

export const screen = async () => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: '../view/public/aexample.png' });
  
    await browser.close();
  }