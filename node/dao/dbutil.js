//一般来说一个dao 文件对应一个表

let mysql = require('mysql')

//配置数据库


function createConnection (){
    let connection = mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'heju4663033',
        database:'school',

    });
    return connection;
}


module.exports = {
    'createConnection':createConnection
} ;
