/**packages */
const mongoose = require("mongoose");

/**Schema creation */
const programdShema = new mongoose.Schema({
    code:{
        type:"String",
        required: true,
        unique:true
    },
     name: {
        type:"String",
        required: true
    },
    directorname: {
        type:"String",
        required: true
    },
    faculty_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_faculty",
        required: true
    },
});

/**schema exportation */
module.exports = programShema;