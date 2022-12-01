/*
 * @LastEditTime: 2022-12-01 14:14:46
 */
// 选择修改文件，再启动项目

const inquirer = require('inquirer')
const chalk = require('chalk')
const shell = require('shelljs');
const fs = require('fs')
const path = require('path')

const UPDATE_FILE = 'some.js'

inquirer
  .prompt([
    {
        type: 'list',
        name: 'key',
        message: chalk.blueBright('请选择?'),
        prefix: '',
        suffix: '',
        choices: [
            { name: '1. s', value: 'v1', },
            { name: '2. e', value: 'v2', }
        ],
    },
  ])
  .then((answers) => {
    fs.readFile(path.join(__dirname , UPDATE_FILE), 'utf-8', (err, data) => {
        if(err) throw err;
        /* 处理修改文件内容 视具体内容修改 */
        data = data.replace(/some/g, `some = ${answers.key}`)
        try {
            fs.writeFileSync(path.join(__dirname , UPDATE_FILE), data, 'utf-8')
            console.log(chalk.green(`成功!`));

            /* 修改文件成功后 启动项目 */
            const yarn = shell.which('yarn')

            if(yarn) {
                shell.exec('yarn start')
            } else {
                shell.exec('npm start')
            }
        } catch (error) {
            throw error;
        }
    })
  })
  .catch((error) => {
    console.log(error);
  });