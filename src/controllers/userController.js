const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  if (req.body && req.object.keys(req.body).length > 0) {
    let user = await userModel.create(req.body)
    res.status(201).send({ status: true, data: user })
  } else {
    res.status(400).send( {status: false, msg: "Request must contain a body"} )
  }
};

const loginUser = async function (req, res) {
  if (req.body && req.body.emailId && req.body.password) {
    let user = await userModel.findOne({ name: req.body.emailId, password: req.body.password })
    if (user) {
      let payload = { _id: user._id }
      let token = jwt.sign(payload, "mysecretkey")
      res.setHeader("x-auth-token", token)
      res.status(200).send({status: true})
    } else {
      res.status(401).send({ status: false, msg: "Invalis username or password" })
    }
  } else {
    res.status(400).send({ status: false, msg: "Request body must contain emailId and password" })
  }
};

const getUserData = async function (req, res) {
  if (req.validToken._id == req.params.userId) {
    let user = await userModel.findOne({
      _id: req.params.userId
    });
    if (user) {
      res.status(200).send({ status: true, data: user})
    } else {
      res.status(404).send({ status: false, msg: "user not foung"});
    }
  } else {
    res.status(403).send({ status: false, msg: "Not authorised"});
  } 
};

const updateUser = async function (req, res) {
  let userData = req.body
  if (req.validToken._id == req.params.userId) {
    let updatedUser = await userModel.findOneAndUpdate({_id: req.params.userId}, userData);
    if (updatedUser) {
      res.status(200).send({ status: true, data: updatedUser})
    } else {
      res.status(404).send({ status: false, msg: "user not found"});
    }
  } else {
    res.status(403).send({ status: false, msg: "Not authorised"});
  }
};

const deleteUser = async function (req, res) {
  let userData = req.body
  if (req.validToken._id == req.params.userId) {
    let updatedUser = await userModel.findOneAndUpdate({_id: req.params.userId}, userData);
    if (updatedUser) {
      res.status(200).send({ status: true, data: updatedUser})
    } else {
      res.status(404).send({ status: false, msg: "user not found"});
    }
  } else {
    res.status(403).send({ status: false, msg: "Not authorised"});
  }
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

