/**packages */
const mongoose = require("mongoose");

/**Schema creation */
const courseShema = new mongoose.Schema({
    code:{
        type:"String",
        required: true
    },
     name: {
        type:"String",
        required: true
    },
   
});

/**schema exportation */
module.exports = courseShema;