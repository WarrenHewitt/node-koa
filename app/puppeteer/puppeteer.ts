import path from 'path/posix';
import puppeteer from 'puppeteer'

export const screen = async () => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: './server/views/public/img/shot.png' });
    
    await browser.close();
  }
  
  export const menu = async () => {
    /* 截屏一个网站的首页 */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    const li = page.$eval('#hotsearch-refresh-btn > span', (l) => {
      console.log(l.innerHTML);
    })
    // page.on('load', () => {
    // })
    // await page.screenshot({ path: path.join('./server/views/public/img/shot.png') });

    await browser.close();
}