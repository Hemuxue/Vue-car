
let dbutil = require('./dbutil');

function queryAllStudent(success) {

    let  querySql = "select * from student;";

    //每次差数据库的时候就重新创建一个Connection ，
    // 不然 每次把他connetion关了之后，下次来连接的时候连接不通了。
    let connection = dbutil.createConnection();

    //再查sql前需要先连接，查完了之后要关闭。
    //调用connection.query 来执行sql ，第一个参数为一个sql，第二个参数为一个回调
    //回调2个参数，一个是error，二个是result 。这两个结果互斥

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
// queryAllStudent();

function queryStudentByClassAndAge(classNum,age) {
    //带参数的sql，如果用字符串拼写的方式写的话，容易被sql注入，不给你传正确的参数
    //再给你传一个select
    // let  querySql = `select * from student where class = ${classNum};`;

    /*在需要填参数的地方加一个 ？号，表示有参数，这个参数，
    放在 connection.query() 方法里面 的 sql和 回调之间，
     如果是多个参数就写出数组,与sql语句里面的先后顺序依次对应，如下*/

    let querySql = 'select * from student where class = ? and age = ?';

    let queryParams = Array.from(arguments);
    let connection = dbutil.createConnection();

    connection.connect();
    connection.query(querySql , queryParams, function (error,result) {
        if(error == null){
            //因为在回调函数里面，不能return ，所以需要再加一个函数
            // console.log(result)
            return result;
        }else {
            console.log(error)
        }
    })
    connection.end()
}
//如果上面一个函数也执行，报错了。所以是不能同时对一个表进行多次查询，还是查询表中的列有冲突
// queryStudentByClassAndAge(2,19)

function queryStudentByStuNum(stuNum,success){
    let querySql = 'select * from student where stu_num = ?';

    let connection = dbutil.createConnection();

    connection.connect();

    connection.query(querySql , +stuNum, function (error,result) {
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
    'queryAllStudent':queryAllStudent,
    'queryStudentByClassAndAge':queryStudentByClassAndAge,
    'queryStudentByStuNum':queryStudentByStuNum

}