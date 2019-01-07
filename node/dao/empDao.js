let dbutil = require('./dbutil');
//登录
function queryEmpByEmpName(empName,success){
    let querySql = 'select password from emp where empName = ?';

    let connection = dbutil.createConnection();

    connection.connect();

    connection.query(querySql , empName, function (error,result) {
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
//通过empID 找姓名
function queryEmpNameByEmpId(empId,success){
    let querySql = 'select empName from emp where empId = ?';

    let connection = dbutil.createConnection();

    connection.connect();

    connection.query(querySql , empId, function (error,result) {
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


function queryAllEmp(success) {

    let  querySql = "select * from emp;";

    let connection = dbutil.createConnection();

    connection.query(querySql,function (error,result) {
        if(error == null){
            console.log(result)
            success(result)
        }else {
            console.log(error)
        }
    })
    //查完之后要关闭，不然当再查的时候有需要创建一个新的连接，当次数足够多的时候非常占用系统资源。

    connection.end()
}

module.exports = {
    'queryEmpByEmpName':queryEmpByEmpName,
    'queryAllEmp':queryAllEmp,
    'queryEmpNameByEmpId':queryEmpNameByEmpId

}