const fs = require('fs')
const path = require('path')

/**
 * @des 测试 bat 文件 不重新打开 cmd 直接调用 node 执行文件
 */
const files = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf-8')

fs.writeFileSync(path.join(__dirname, 'test.txt'), files.replace(/a=1/, 'a=2'))

console.log('success');