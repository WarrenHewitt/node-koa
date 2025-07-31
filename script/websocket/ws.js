/*
 * @Author: Warren
 * @Date: 2024-10-09 18:04:14
 * @LastEditors: Warren
 * @LastEditTime: 2024-10-11 12:17:04
 * @FilePath: \node-koa\practice\websocket\ws.js
 * @Description: ws
 */

const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log(data.toString());
    });


    setTimeout(() => {
        ws.send(`server message: ${Date().toString()}`)
    }, 5000);

    // setInterval(() => {
    //     ws.send(`server message: ${Date().toString()}`)
    // }, 5000)
});