/*
 * @Author: Warren
 * @Date: 2025-02-07 08:57:05
 * @LastEditors: Warren
 * @LastEditTime: 2025-02-07 09:45:14
 * @FilePath: /node-koa/practice/httpRequest.js
 * @Description: node 原生 http 请求
 */

const https = require('https');
const fs = require('fs');

// 定义要请求的 URL
const url = 'xxxx';

const httpRequest = (url, callback) => {
    // 发起 GET 请求
    https.get(url, (response) => {
        let data = '';

        // 接收数据片段
        response.on('data', (chunk) => {
            data += chunk;
        });

        // 数据接收完成
        response.on('end', () => {
            try {
                // 将接收到的数据解析为 JSON
                const jsonData = JSON.parse(data);
                callback(jsonData);
            } catch (error) {
                console.error('解析 JSON 失败:', error);
            }
        });
    }).on('error', (error) => {
        console.error('请求失败:', error);
    });
}


httpRequest(url, (data) => {
    fs.writeFileSync('./data-xxx.json', JSON.stringify(data))
})