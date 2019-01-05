let dbutil = require('./dbutil')

function insertCust(params,success){
    let querySql = 'insert into customer (cusName,sex,birthday,address,phone,createTime) values  ( ?,? ,?,?,?,?);';

    let connection = dbutil.createConnection();

    connection.connect();
    console.log('insertCust')
    connection.query(querySql , params, function (error,result) {
        if(error == null){
            //因为在回调函数里面，不能return ，所以需要再加一个函数
            // console.log(result)
            success(result);
        }else {
            console.log(error)
        }
    })
    connection.end()
}

module.exports = {
    'insertCust':insertCust
}