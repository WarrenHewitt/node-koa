const readline = require('readline');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout)


const rl = readline.createInterface({
    /* 可读流 */
    input: process.stdin,
    /* 可写流 */
    output: process.stdout,
    /* 提示信息 */ 
    // prompt: '请输入：'
});

/** 
 * @des 这里会覆盖 创建实例时的初始值
 */
rl.setPrompt('set please input: ')
rl.prompt();

/**
 * @des 
 * 1. 参数为字符串时，即为直接输入到命令行的内容
 * 2. 如下的write是模仿ctrl + u 功能，删除当前行的输入内容
 */
rl.write('this is the content to be deleted!');
setTimeoutPromise(1000, 'par')
    .then((val) => {
        /**
         * @des 延迟执行 看清删除过程
         */
        rl.write(null, { ctrl: true, name: 'u' });
        console.log(' immediate arg:', val);
    }).catch((err) => {
        console.log(err);
    });

/**
 * @des
 * 1. line事件触发条件，输入的内容包含 \n(newline 向下移动一行，并不移动左右) ,\r(return 到当前行的最左边) 或 \n\r。
 * 2. Linux中\n表示回车+换行；Windows中\r\n表示回车+换行。
 */
rl.on('line', function(input) {
    input = input.replace('please input right: ', '');
    console.log(`Event line, you input: ${input}`);
    rl.setPrompt('');
    if(input === 'right') {
        rl.close()
    } else if (input === 'pause') {
        rl.pause()
    } else if (input === 'qs') {
        /**
         * @des question
         */
        rl.question('ask some questions ', (qs) => {
            console.log(`question： ${qs}`);
            rl.close();
        });
    } else {
        rl.write('please input right: ');
    }
})

/**
 * @des  close 事件
 * 触发条件：
 * 1. rl 实例调用 close方法 
 * 2. ctrl+c 
 * 3. ctrl+d  
 * 4. The input stream receives its 'end' event
 */
rl.on('close', function() {
    console.log(`Event close`);
    process.exit(0);
})

/**
 * @des 调用 rl.pause 时触发, 调用close也会触发
 */
rl.on('pause', function() {
    console.log('Event pause');
    rl.resume()
})

/**
 * @des 重新唤起
*/
rl.on('resume', () => {
    console.log('Event resumed');
});