
let empDao = require('../dao/empDao');

function queryAllEmpSer(success) {
    empDao.queryAllEmp(success);
}

function queryEmpByEmpNameSer(stuNum,success){
    empDao.queryEmpByEmpName(stuNum,success);
}
module.exports = {
    'queryAllEmpSer' : queryAllEmpSer,
    'queryEmpByEmpNameSer':queryEmpByEmpNameSer
}