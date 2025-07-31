/*
 * @LastEditTime: 2022-11-30 15:59:37
 */
import inquirer from 'inquirer' /* 版本大于9  不能使用 commonjs 语法  */
import generatorTemplate from './generatorTemplate.js'

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
        /* 输出值为：{ toBeDelivered: true, choices: [ 'name' ] } */
        if(answers.toBeDelivered && answers.choices[0] === 'yes') {
            generatorTemplate.generator();
        } else {
            console.log('不生成模板');
        }
    });