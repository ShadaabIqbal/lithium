const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/userModel");

const createUser = async function(req,res) {
try{
    let userData = req.body;
    if ( Object.keys(userData).length != 0 ) {
        let savedUser = await userModel.create(userData);
        return res.status(201).send({msg: savedUser});
    }
    else return res.status(400).send({msg: "User data is mandatory"});
} catch (err) {
    return res.status(500).send({"Error": err, Error: err.message});
}
}

const userLogin = async function(req,res) {
try {
   let { emailId, password } = req.body;
   if (!emailId || !password) {
    return res.status(400).send({msg: "EmailId or Password is missing"});
   } 
    let user = await userModel.findOne({emailId, password});
    if (!user) {
    return res.status(401).send({msg: "User not found"});
    } else {
        let token = jwt.sign({_id: user._id}, "secretkey11");
        res.setHeader("x-auth-token", token);
        return res.status(200).send({msg: token});
    }
} catch(err) {
    return res.status(500).send({"Error": err, Error: err.message})
} 
}

const getUserDetails = async function(req,res) {
try {
    let userId = req.params.userId;
    let decodedToken = req.decodedToken;
    if (decodedToken._id !== userId) {
        return res.status(401).send({msg: "Not authorised"})
    } else {
        let user = await userModel.findById(userId);
        return res.status(200).send({msg: user});
    }
} catch(err) {
    return res.status(500).send({"Error": err, Error: err.message});
}
}

const updateUserDetails = async function(req,res) {
try {
        let userId = req.params.userId;
        let updatedData = req.body;
        let decodedToken = req.decodedToken;
        if (decodedToken._id !== userId) {
            return res.status(401).send({msg: "Not authorised"})
        } else {
            let user = await userModel.findByIdAndUpdate({ _id: userId}, updatedData);
            return res.status(200).send({msg: user});
        }
} catch(err) {
    return res.status(500).send({"Error": err, Error: err.message});
}
    }

    const deleteUserDetails = async function(req,res) {
    try {
            let userId = req.params.userId;
            let updatedData = req.body;
            let decodedToken = req.decodedToken;
            if (decodedToken._id !== userId) {
                return res.status(401).send({msg: "Not authorised"})
            } else {
                let user = await userModel.findByIdAndUpdate({ _id: userId}, updatedData);
                return res.status(200).send({msg: user});
            }
    } catch(err) {
        return res.status(500).send({"Error": err, Error: err.message});
    }
        }


module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUserDetails = getUserDetails;
module.exports.updateUserDetails = updateUserDetails;
module.exports.deleteUserDetails = deleteUserDetails;
