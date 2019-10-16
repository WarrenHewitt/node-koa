[toc]
# node 利用命令行交互生成相应模板

- 创建时间：2019-10-15 
- 测试环境：win10 node-v10.16.1

---

受 `vue-cli` 初始化项目的启发，想探究其原理和自己实现一套类似方法，以便在项目中创建公用模板块。

---

这里采用三种方式实现
1. node 自带的 `readline`
2. 使用process实现 
3. 第三方包 `inquirer`

还有其它实现方式如 `commander.js` 等，这里不做具体实现

所有实现方式的完整代码 [github 链接](https://github.com/NameHewei/node-koa/tree/master/practice/generatorTemplate)

链接文件结构如下
```
|-- generatorTemplate.js (生成模板)
|-- readline.js (readline 方式完整代码)
|-- process.js (process 方式完整代码)
|-- inquirer.js (inquirer 方式完整代码)
```

---

创建的模板示例：根据用户输入的不同，返回不同结果，包括实现了生成一个文件夹,文件夹内容如下
```
|--template
   |--css
   |--images
   |--js
     |-- index.js
```

## readline 实现

引入 node 自带的 `readline`
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
完整代码查看 readline.js

更多用法参考: [官方文档 readline](https://nodejs.org/dist/latest-v12.x/docs/api/readline.html)

## 使用process实现

当用户输入的内容为template时，就生成模板

```js
const processFn = () => {
    const handleInput = (input) => {
        if(input === 'student') {
            process.stdout.write('there is student here: hew\n')
        } else if(input === 'template') {
            /* 这里的generator方法参见 */
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

完整代码查看 process.js

更多用法参考: [官方文档 process](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)

## 使用 inquirer

```js
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
            /* 这里的generator方法参见下方 */
            generatorTemplate.generator();
        } else {
            console.log('不生成模板');
        }
    });
```

完整代码查看 inquirer.js

更多用法参考: [官方文档 inquirer](https://www.npmjs.com/package/inquirer)

## 调用的生成模板方法 (generator 方法)
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


> 欢迎交流 [Github](https://github.com/NameHewei/blog-note)