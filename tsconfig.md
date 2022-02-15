# ts 配置说明

官方文档 https://www.tslang.cn/docs/handbook/tsconfig-json.html

```js
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "server",
        "baseUrl": ".",
        "paths": {
            "*": [
                "app/*",
                "node_modules/*"
            ]
        },
        "experimentalDecorators": true
    },
    // 
    "include": [
        "app/**/*"
    ]
}
```