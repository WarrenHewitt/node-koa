/*
 * @Author: Warren
 * @Date: 2025-09-09 19:03:36
 * @LastEditors: Warren
 * @LastEditTime: 2025-09-10 15:56:33
 * @FilePath: /node-koa/test.js
 * @Description: 请填写文件说明
 */
const path = require("path");

const a = path.join(__dirname)

console.log("🚀 ~ a:", a)

const se = new Set();
se.add(a)
console.log(se.has(a));

se.forEach(item => {
  console.log("🚀 ~ item:", item)
})

console.log("🚀 ~ se:", se)
