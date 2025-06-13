const mongoose = require('mongoose');

const disbursmentSchema = mongoose.Schema({
    id: String,
    borrowerName: String,
    loanAmount: Number,
    status: {type : String, enum : ["Pending" , "Approved" , "Rejected"]},
    submittedAt: Date
})

const disbursmentModel = mongoose.model('Disbursments',disbursmentSchema);

module.exports = disbursmentModel;