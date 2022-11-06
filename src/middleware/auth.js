const jwt = require("jsonwebtoken");

let tokenCheck = function(req,res,next) {
    let token = req.headers["x-auth-token"]
    let validToken = jwt.verify(token, "mysecretkey")
    if (validToken) {
        req.validToken = validToken
        next()
    } else {
        res.status(401).send({ status: false, msg: "Invalid Token"})
    }
}

module.exports.tokenCheck = tokenCheck;