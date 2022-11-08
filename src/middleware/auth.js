const jwt = require("jsonwebtoken");

const tokenCheck = async function(req,res,next) {
try {
    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(400).send({msg: "Request missing a mandatory header"});
    }
    let decodedToken = jwt.verify(token, "secretkey11");
    if (!decodedToken) {
        return res.status(400).send({msg: "Invalid token"});
    }
    req.decodedToken = decodedToken;
}  catch(err) {
    return res.status(500).send({"Error": err, Error: err });
    }
    next()
}

module.exports.tokenCheck = tokenCheck;