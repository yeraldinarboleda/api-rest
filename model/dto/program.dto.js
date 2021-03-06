/**packages */
const mongoose = require("mongoose");

/**using schema */
const schema=require("../schemas/program.shema");

schema.statics = {
    create: function (data,cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query,cb){
        this.find(query, cb);
    },
    getByCode: function (query,cb){
        this.find(query, cb);
    },
    update:function(query, data, cb){
        this.findOneAndUpdate(query,{$set: date},{new : true},cb);
    },
    delete: function(query, cb){
        this.findOneAndUpdate(query);
    }
};

const dto = mongoose.model("coll_program", schema)
module.exports = dto;