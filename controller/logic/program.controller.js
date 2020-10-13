/**dto */
const ProgramDto = require("../../model/dto/Program.dto");
const config= require("config");

exports.createProgram = (req, res, next) =>{
    let Program = {
        code: req.body.code,
        name: req.body.name,
        directorname: req.body.directorname,
        faculty_id: req.body.faculty_id
    };

    ProgramDto.create(Program, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info:data
            }
        );
    });
};

exports.updateProgram = (req, res, next) =>{
    let Program = {
        code: req.body.code,
        name: req.body.name,
        directorname: req.body.directorname,
        faculty_id: req.body.faculty_id
    };
    ProgramDto.update({_id: req.body.id},Program, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info:data
            }
        );
    });
};


exports.getAll = (req, res, next) =>{
    
    ProgramDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info:data
            }
        );
    });
};
exports.getByCode = (req, res, next) =>{
    
    ProgramDto.getByCode({code: req.params.code}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info:data
            }
        );
    });
};

exports.deleteProgram = () =>{
    ProgramDto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(204).json();
    });
};