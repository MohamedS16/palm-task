const data = require('./../utils/data');
const Disbursment = require('./../models/Disbursment')
const sendToSlack = require('./../utils/sendToSlack')

const getAllDisbursments = (req,res)=>{
    res.json({status : 200,message  : "success",data});
}

const createNewDisbursment = async (req,res)=>{
    try{
        const data = req.body;
        const created = await Disbursment.create(data)
        sendToSlack(`Disbursment Number ${created.id} Created Successfully`);
    }catch(er){
        res.json(er);
    }
}

module.exports = {
    getAllDisbursments,
    createNewDisbursment
}