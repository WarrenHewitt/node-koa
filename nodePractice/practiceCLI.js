const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// });

/**
 * @description readline 学习  
 * 1. line事件  遇到 \n(newline 向下移动一行，并不移动左右) ,\r(return 到当前行的最左边) 或 \n\r。
 * Linux中\n表示回车+换行；Windows中\r\n表示回车+换行。
 */

rl.on('line', function(input) {
    console.log(`Event line, you input: ${input}`);
    rl.close();
})

/**
 * @des  close 事件
 */
rl.on('close', function(input) {
    console.log(`Event line, you input: ${input}`);
    rl.close();
})