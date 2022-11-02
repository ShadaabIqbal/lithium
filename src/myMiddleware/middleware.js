const moment = require("moment");

const commonMiddleware = async function(req,res,next) {
    const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(currentTime);
    const ip = req.ip;
    console.log(ip);
    const path = req.originalUrl;
    console.log(path);
    next()
}

module.exports.commonMiddleware = commonMiddleware;