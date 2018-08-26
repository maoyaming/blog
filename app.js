const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.send('响应成功');


})






app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动');
    }
});