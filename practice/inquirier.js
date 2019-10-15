const inquirer = require('inquirer');

/**
 * @des 还有一种方式参见  commander.js
 */

inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'toBeDelivered',
            message: 'Is this for delivery?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'choices',
            message: 'Is this for delivery?',
            default: 'check',
            choices: ['name', 'age']
        }
        /* Pass your questions in here */
    ])
    .then(answers => {
        console.log(answers);
        // Use user feedback for... whatever!!
    });