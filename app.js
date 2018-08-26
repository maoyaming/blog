const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
//开发静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({
    partialsDir: [{
        dir: path.join(__dirname, 'views', 'home', 'partials')
    }, {
        dir: path.join(__dirname, 'views', 'admin', 'partials')
    }],
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'home'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');




// 导入主路由模块
const home = require('./routes/home.js');
// 当请求来时 以对应的路由导出
app.use('/home', home);
const admin = require('./routes/admin.js');
app.use('/admin', admin);



app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动');
    }
});