/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
/**Schema creation */
const studentShema = new mongoose.Schema({
    code:{
        type:"String",
        required: true,
        unique:true
    },
     name: {
        type:"String",
        required: true
    },
    lastname: {
        type:"String",
        required: true
    },
    email: {
        type:"String",
        required: true,
        unique:true
    },
    phone: {
        type:"String",
        required: true
    },
    program_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_program",
        required: true
    },
    
});

/**schema exportation */
studentShema.plugin(validator);
module.exports = studentShema;