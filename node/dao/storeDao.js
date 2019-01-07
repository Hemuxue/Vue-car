let dbutil = require('./dbutil')

function insertStore(params,success){
    let insertSql = 'insert into store (storeId ,storeName  , address , phone,manager) values  ( ?,? ,?,?,?);';
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

function queryAllStor(success){
    let querySql = 'select storeName ,address,store.phone, manager, empName,store.storeId from store left join emp on store.manager = emp.empId;';
    
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
function deleteByStoreName(storeName,success){
    let deleteSql = 'delete from store where storeName = ?;';

    let connection = dbutil.createConnection();

    connection.connect();
    connection.query(deleteSql , storeName, function (error,result) {
        if(error == null){
            success(result);
        }else {
            console.log(error)
        }
    })
    connection.end()
}

function updateStoreByStoreId(params,success){
    let updateSql = 'update car.store set storeName = ?,address =?,phone=?,manager =? where storeId=?;';
    
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
    'insertStore':insertStore,
    'queryAllStor':queryAllStor,
    'deleteByStoreName':deleteByStoreName,
    'updateStoreByStoreId':updateStoreByStoreId
}