let custDao = require('../dao/customerDao')

function insertCustSer(params,success){
    custDao.insertCust(params,success);
}
function queryAllCustSer(success){
    custDao.queryAllCust(success)
}

function deleteByPhoneSer(phone,success){
    custDao.deleteByPhone(phone,success)
}
function updataCustSer(params,success){
    custDao.updateCustByPhone(params,success)
}

module.exports = {
    'insertCustSer':insertCustSer,
    'queryAllCustSer':queryAllCustSer,
    'deleteByPhoneSer':deleteByPhoneSer,
    'updataCustSer':updataCustSer
}