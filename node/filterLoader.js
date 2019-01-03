const fs = require('fs')
const globalConfig = require('./config')
let files = fs.readdirSync(__dirname+'/'+globalConfig.filter_path);

var filterSet = [];

for (var i = 0 ; i < files.length ; i++){
    //导出的是各种拦截方法，每一个文件是一个拦截
    let temp = require('./'+globalConfig.filter_path+'/'+files[i])

    filterSet.push(temp);
}

module.exports = filterSet