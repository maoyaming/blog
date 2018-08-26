//创建后端一级路由
const express = require('express');
const admin = express.Router();
const connection = require('../model/db.js');

admin.get('/index', (req, res) => {
    res.render('admin/index', {
        layout: 'admin'
    })
})
admin.get('/add', (req, res) => {
    res.render('admin/add', {
        layout: 'admin'
    })
})
admin.get('/list', (req, res) => {
    res.render('admin/list', {
        layout: 'admin'
    })
})
admin.get('/repass', (req, res) => {
    res.render('admin/repass', {
        layout: 'admin'
    })
})
admin.get('/settings', (req, res) => {
    res.render('admin/settings', {
        layout: 'admin'
    })
});
// 将主路由开放出去
module.exports = admin;