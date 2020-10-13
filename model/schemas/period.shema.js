/**packages */
const mongoose = require("mongoose");

/**Schema creation */
const periodShema = new mongoose.Schema({
    year:{
        type:"Number",
        required: true,
        min:2020,
        max:2030
    },
     number: {
        type:"Number",
        required: true,
        min:1,
        max:2
    },
    current:{
        type:"Boolean",
        require: true,
        default: true
    }
});

/**schema exportation */
module.exports = periodShema;