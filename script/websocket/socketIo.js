const { request } = require("http");

/*
 * @Author: Warren
 * @Date: 2024-09-29 10:21:24
 * @LastEditors: Warren
 * @LastEditTime: 2024-10-09 16:44:18
 * @FilePath: \node-koa\practice\websocket\index.js
 * @Description: 请填写文件说明
 */

const { Server } = require("socket.io");

const io = new Server({
    /* 跨域处理 */
    cors: {
        origin: "http://localhost:3011"
    }
});


io.on("connection", (socket) => {
    console.log('== connected ==');

    /* 模拟消息发送 */
    setInterval(() => {
        socket.emit('message', 'server message');
    }, 5000);

    //监听disconnect事件
    socket.on('disconnect', () => {
        console.log('== disconnect ==')
    })


    // 与客户端统一的自定义事件
    socket.on('message', (msg) => {
        console.log(`client send msg: ${msg}`)
    })
});

io.listen(3010);
