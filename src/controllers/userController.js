const jwt = require("jsonwebtoken");
const userModel = require("../MODELS/userModel");

const createUser = async function(req,res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({msg: savedData});
}

const loginUser = async function(req,res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) return res.send({status: false, msg: "username or password is not correct"});
    let token = jwt.sign({ emailId: userName, password: password }, "secret-key-11");
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token });
}

const getUserData = async function(req,res) {
    // AUTHENTICATION RELATED CODE IN MIDDLEWARE:
    // let token = req.headers["x-auth-token"];
    // if(!token) return res.send({ status: false, msg: "token must be present"});
    // let decodedtoken = jwt.verify(token, "secret-key-11")
    // if(!decodedtoken) return res.send({ status: false, msg: "token is invalid"});
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(!userDetails) return res.send({ status: false, msg: "No such user exists"});
    res.send({status: true, data: userDetails});
}

const updateUser = async function(req,res) {
    // AUTHENTICATION RELATED CODE IN MIDDLEWARE:
    // let token = req.headers["x-auth-token"];
    // if(!token) return res.send({ status: false, msg: "token must be present"});
    // let decodedtoken = jwt.verify(token, "secret-key-11")
    // if(!decodedtoken) return res.send({ status: false, msg: "token is invalid"});
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(!userDetails) return res.send({ status: false, msg: "No such user exists"});
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId}, userData);
    res.send({status: updatedUser, data: updatedUser});
}

const deleteUser = async function(req,res) {
    // AUTHENTICATION RELATED CODE IN MIDDLEWARE:
    // let token = req.headers["x-auth-token"];
    // if(!token) return res.send({ status: false, msg: "token must be present"});
    // let decodedtoken = jwt.verify(token, "secret-key-11")
    // if(!decodedtoken) return res.send({ status: false, msg: "token is invalid"});
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(!userDetails) return res.send({ status: false, msg: "No such user exists"});
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId}, userData);
    res.send({status: updatedUser, data: updatedUser});
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

