const jwt = require("jsonwebtoken");

const commonMiddleware = async function(req,res,next) {
    // AUTHENTICATION RELATED CODE:
    let token = req.headers["x-auth-token"];
    if(!token) return res.send({ status: false, msg: "token must be present"});
    let decodedtoken = jwt.verify(token, "secret-key-11")
    if(!decodedtoken) return res.send({ status: false, msg: "token is invalid"});
    next();
}

module.exports.commonMiddleware = commonMiddleware;