const User = require('./user');
let list = [];
list.push(User);


//自动扫描一下api？ 然后判断有无数据有则加入list。然后导出
module.exports = list