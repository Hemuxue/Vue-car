let dbutil = require('./dbutil')

function insertCust(params,success){
    let insertSql = 'insert into customer (cusName,sex,birthday,address,phone,createTime) values  ( ?,? ,?,?,?,?);';

    let connection = dbutil.createConnection();

    connection.connect();
    connection.query(insertSql , params, function (error,result) {
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

function queryAllCust(success){
    let querySql = 'select cusName , sex ,birthday ,address, phone ,yajin from customer;';

    let connection = dbutil.createConnection();

    connection.connect();

    connection.query(querySql, function (error,result) {
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
function deleteByPhone(phone,success){
    let deleteSql = 'delete from car.customer where phone =?;';

    let connection = dbutil.createConnection();

    connection.connect();
    connection.query(deleteSql , phone, function (error,result) {
        if(error == null){
            success(result);
        }else {
            console.log(error)
        }
    })
    connection.end()
}

function updateCustByPhone(params,success){
    let updateSql = 'update customer set cusName = ?,sex =?,address =? where phone = ?;'

    let connection = dbutil.createConnection();

    connection.connect();
    connection.query(updateSql , params, function (error,result) {
        if(error == null){
            success(result);
        }else {
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {
    'insertCust':insertCust,
    'queryAllCust':queryAllCust,
    'deleteByPhone':deleteByPhone,
    'updateCustByPhone':updateCustByPhone
}