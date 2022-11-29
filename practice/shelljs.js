/*
 * @LastEditTime: 2022-11-22 16:36:30
 */
/**
 * @describe 在nodejs中使用 linux 命令
 * https://www.npmjs.com/package/shelljs
 */

const shell = require('shelljs');

/**
 * @describe API 使用
 */

/* 输出 */
shell.echo('hello');  // hello

/* 判断是否有该命令 */
const yarn = shell.which('yarn')
const npm = shell.which('npm')

if(yarn) {
  /* 执行命令 */
  shell.exec('yarn start')
} else {
  shell.exec('npm run dev')
}