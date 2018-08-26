//创建前端一级路由
const express = require('express');
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
// 将主路由开放出去















module.exports = home;