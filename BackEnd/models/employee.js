const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    id :{
        type : Number,
        required : true
    },
    emp_Name :{
        type: String,
        required : true
    },
    emp_Dep : {
        type: String,
        required : true
    },
    emp_Salary : {
        type : Number,
        required : true,
    },
    join_Date :{
        type : Date,
        default: Date.now
    },
    gender : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);