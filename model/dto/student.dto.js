/**packages */
const mongoose = require("mongoose");
const db= require("../db-connection/mongodb")

/**using schema */
const schema=require("../schemas/student.shema");
db();
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

const dto = mongoose.model("coll_student", schema)
module.exports = dto;