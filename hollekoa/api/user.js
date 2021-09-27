const router = require('koa-router')();
const User = require('../model/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema(User.schema);
// 创建模型
const us = mongoose.model('User', schema);

router.post('/api/login', async (ctx) => {
    // 取得值，然后查询数据库， 密码应该加密？
    const {
        name,
        password
    } = ctx.request.body;
    // const res = await us.create(ctx.request.body);
    console.log(name, password);
    const res = await us.find({
        name: name,
        password: password
    });
    if (res.length != 0) {
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: 'token'
        }, 'secret');
        console.log(token);
        ctx.body = {
            token,
        };
    }
})
module.exports = router.routes()