/*
 * @LastEditTime: 2022-11-30 16:02:31
 */
import inquirer from 'inquirer'

/**
 * mjs  用 es6 语法
 * package.json "type": "module",
 */

/**
 * @des 还有一种方式参见  commander.js
 */
inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'toBeDelivered',
            message: '是否生成模板?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'choices',
            message: 'Is this for delivery?',
            default: 'check',
            choices: ['yes', 'no']
        }
    ])
    .then(answers => {
        console.log(answers);
    });


    export const test = () => {
        console.log('test cjs');
    }