/**
 * 连接数据库  
 * 创建模型  
 * 创建对应 router页面 ？是否有必要 以及 是否可以快速cli创建？  名称为：api/
 * 
 * @param {*} config 
 * @returns 
 */
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const loadModel = config => {
    mongoose.connect(config.db.url, config.db.options)
    const conn = mongoose.connection
    conn.on('error', () => {
        console.log("数据库连接失败")
    })
    createFile('../model', (filename) => {
        // 创建对应文件夹，添加什么内容？
        fs.writeFileSync(`./api/${filename}`, '')
    })

}

/**
 * 生成 /api/模型名.js
 * 还需要一个 index.js  " 用来导出所有的模型api" 
 * @param {*} url 
 * @returns 
 */
function createFile(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url);

    if (!fs.existsSync('./api')) {
        // console.log("不存在 /api,创建api");
        fs.mkdirSync('./api');
    }
    files.forEach((filename) => {
        if (!fs.existsSync(`./api/${filename}`)) {
            cb(filename);
        }
    })
}
module.exports = {
    loadModel
}