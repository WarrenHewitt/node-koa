import fs from "fs"
import puppeteer from "puppeteer"

/**
 * 获取 jueJin
 * @param ctx 
 */
export const jueJin = async (ctx: any) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  page.on('error', err => {
    console.log(err);
  })
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i) {
      console.log(`${i}: ${msg.args()[i]}`);
    }
  })

  await page.goto('https://juejin.cn/frontend', {
    timeout: 30 * 1000, // 默认是30秒
    waitUntil: 'load'
    // waitUntil: [
    //   'load',              //等待 “load” 事件触发
    //   'domcontentloaded',  //等待 “domcontentloaded” 事件触发
    //   'networkidle0',      //在 500ms 内没有任何网络连接
    //   'networkidle2'       //在 500ms 内网络连接个数不超过 2 个
    // ]
  })

  /* 等待元素加载成功 */
  await page.waitForSelector('#juejin > div.view-container.container > main')
  await page.screenshot({ path: './shot.png' });


  const liData = await page.evaluate(() => {
    const lis = document.querySelectorAll('#juejin > div.view-container.container > main > div > div > div > div > div > div > div > li');
    console.log(lis.length);
    const news: any[] = []
    lis.forEach((ele, i) => {
      let title:any = ele.querySelector('.title-row a')
      title = title ? title.innerHTML : ''
      console.log(title);
      let abstract:any = ele.querySelector('.abstract a')
      abstract = abstract ? abstract.innerHTML : ''
      news.push({ title, abstract })
    })
    return news
  })

  /* 写入JSON文件 */
  fs.writeFileSync('./baidu.json', JSON.stringify(liData, null, 4), 'utf-8')

  await browser.close();

  ctx.body = 'success'
}