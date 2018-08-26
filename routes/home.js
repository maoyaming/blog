//创建前端一级路由
const express = require('express');

const md5 = require('md5');
const home = express.Router();
const connection = require('../model/db.js');
home.get('/index', (req, res) => {
    res.render('home/index');
});
home.get('/about', (req, res) => {
    res.render('home/about');
});
home.get('/article', (req, res) => {
    res.render('home/article');
});
home.get('/center', (req, res) => {
    res.render('home/center');
});
home.get('/join', (req, res) => {
    res.render('home/join');
});
home.get('/login', (req, res) => {
    res.render('home/login');
});
home.get('/register', (req, res) => {
    res.render('home/register');
});

home.post('/register', (req, res) => {

    let { name, pass, email } = req.body;

    if (name.trim().length == 0) {
        res.send({
            error: 100,
            message: '填写用户名'
        })
        return;
    }
    let sql1 = 'select * from users where name=?';
    connection.query(sql1, [name], (err, rows) => {
        if (rows.length == 0) {
            let sql2 = 'insert into users set ?';
            req.body.pass = md5(pass);
            connection.query(sql2, req.body, (err, rows) => {
                if (!err) {
                    res.send({ success: true, message: '成功' })
                } else {
                    res.send({ error: 308, message: '失败' })
                }
            })
        } else {
            res.send({ error: 307, message: '用户名以存在' })
        }
    })


})


// 将主路由开放出去















module.exports = home;