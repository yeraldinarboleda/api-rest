/**packages */
const mongoose = require("mongoose");

/**Schema creation */
const facultyShema = new mongoose.Schema({
    code:{
        type:"String",
        required: true,
        unique:true
    },
     name: {
        type:"String",
        required: true
    },
    deanname: {
        type:"String",
        required: true
    },
});

/**schema exportation */
module.exports = facultyShema;