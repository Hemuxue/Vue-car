
let empDao = require('../dao/empDao');

function queryAllEmpSer(success) {
    empDao.queryAllEmp(success);
}

function queryEmpByEmpNameSer(stuNum,success){
    empDao.queryEmpByEmpName(stuNum,success);
}
function queryEmpNameByEmpIdSer(empId,success){
    empDao.queryEmpNameByEmpId(empId,success)
}
module.exports = {
    'queryAllEmpSer' : queryAllEmpSer,
    'queryEmpByEmpNameSer':queryEmpByEmpNameSer,
    'queryEmpNameByEmpIdSer':queryEmpNameByEmpIdSer
}