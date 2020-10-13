module.exports = (req, res, next) => {
const jwt = require("jsonwebtoken");
const config = require("config");

    let tk = req.helpers["access-token"];
    if(tk){
        let secretKey = config.get("secretkeys").jwt;
        let tkDecoded = jwt.verify(tk, secretKey);
        let currentDate = Math.floor(Date.now() / 1000);
        if (tkDecoded >= currentDate){
            next();
        }else{
            return res.status(400).json({
                mess: "This token is not volid"
            });
        }
    }else{
        return res.status(400).json({
        mess: "Not access token set."
        });
    };

};