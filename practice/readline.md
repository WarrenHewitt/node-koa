# node 利用命令行交互生成相应模板

- 时间：2019-10-15 
- 环境：win10 node-v10.16.1

根据用户输入的不同，返回不同结果，包括实现了生成一个文件夹,内容如下
```
|--template
   |--css
   |--images
   |--js
     |-- index.js
```

这里采用两种方式实现
1. node 自带的 `readline`
2. 第三方包 `inquirer`
3. 使用process实现

还有其它实现方式如 `commander.js` 等，这里不做具体实现

## readline 实现

引入包
```js
const readline = require('readline');
```

初始创建
```js
const rl = readline.createInterface({
    /* 监听可读流 */
    input: process.stdin,
    /* 读取写入的 可写流 */
    output: process.stdout,
    /* 提示信息 */ 
    // prompt: '请输入：'
});
```

利用setPrompt方法可将提示信息重写
```
rl.setPrompt('set please input: ');
rl.prompt();
```

这里会一直监听用户的输入 当输入template时 创建模板

```js
rl.on('line', function(input) {
    if(input === 'template') {
        /* 这里的generator方法参见下方 */
        generatorTemplate.generator()
        rl.close()
    } else if (input === 'pause') {
        rl.pause()
    } else {
        rl.write('please input right: ');
    }
})

```

## 使用process实现

当用户输入的内容为template时，就生成模板

```js
const processFn = () => {
    const handleInput = (input) => {
        if(input === 'student') {
            process.stdout.write('there is student here: hew\n')
        } else if(input === 'template') {
            /* 这里的generator方法参见下方 */
            generatorTemplate.generator()
            process.stdin.emit('end');
        } else {
            process.stdout.write('some other input message\n')
            process.stdin.emit('end');
        }
    }
    process.stdin.setEncoding('utf-8')
    process.stdin.on('readable', () => {
        let chunk = null;
        while ((chunk = process.stdin.read()) !== null) {         
            if (typeof chunk === 'string') {
                chunk = chunk.slice(0, -2);
                if(chunk) {
                    handleInput(chunk)
                } else {
                    process.stdin.emit('end');
                }
            }
        }
    })
    process.stdin.on('end', () => {
        process.stdout.write('结束\n');
        process.exit()
    })
}
```

## 生成模板 (generator 方法)
generator.js
```js
const fs = require('fs');
const path = require('path');

const jsStr = 
`const a = '';
const b = 1;
export default {
    a: a,
    b: b
}
`

function generator() {
    fs.mkdirSync(path.join(__dirname, 'template'));
    fs.mkdirSync(path.join(__dirname, 'template', 'css'));
    fs.mkdirSync(path.join(__dirname, 'template', 'js'));
    fs.mkdirSync(path.join(__dirname, 'template', 'images'));
    
    fs.writeFileSync(path.join(__dirname, 'template', 'js', 'index.js'), jsStr, 'utf-8')
}

exports.generator = generator;
```
