const data = require('./../utils/data');

const getAllDisbursments = (req,res)=>{
    res.json({status : 200,message  : "success",data});
}

module.exports = {
    getAllDisbursments
}