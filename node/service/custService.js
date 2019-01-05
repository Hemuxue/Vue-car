let custDao = require('../dao/customerDao')

function insertCustSer(params,success){
    custDao.insertCust(params,success);
}

module.exports = {
    'insertCustSer':insertCustSer
}