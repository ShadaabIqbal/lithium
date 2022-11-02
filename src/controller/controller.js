const moment = require("moment");
const bookModel = require("../bookModel/bookModel")

const timeStamp = async function(req,res) {
    const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    res.send({msg: currentTime});
}

const myIp = async function(req,res) {
    const ip = req.ip;
    res.send({msg: ip});
}

const myRoute = async function(req,res) {
    const path = req.originalUrl;
    res.send({msg: path});
}

const createBook = async function(req, res) {
    let body = req.body;
    let headers = req.headers;
    let acceptType = headers.accept;
    console.log("The user only accepts", acceptType);
    let year = req.headers.year = 2022
    console.log("The current year is", year);
    let userAgent = headers["user-agent"]
    console.log("The user agent is", userAgent);
    const book = await bookModel.create(body);
    res.send({msg: book});
}

module.exports.timeStamp = timeStamp;
module.exports.myIp = myIp;
module.exports.myRoute = myRoute;
module.exports.createBook = createBook;