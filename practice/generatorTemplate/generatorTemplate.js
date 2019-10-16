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