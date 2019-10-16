const inquirer = require('inquirer');
const generatorTemplate = require('./generatorTemplate.js');

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