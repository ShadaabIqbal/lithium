let commonMiddleware = async function(req,res,next) {
    let freeAppUser = req.headers.isfreeappuser
    if (!freeAppUser) {
        res.send({msg: "Missing a mandatory header"});
    }
    next()
}

let commonMiddleware2 = async function(req,res,next) {
    let freeAppUserValue = req.headers['isfreeappuser']
    if (freeAppUserValue == 'true') {
        req.body.isFreeAppUser = true;
    } else {
        req.body.isFreeAppUser = false;
    }
    next()
}

module.exports.commonMiddleware = commonMiddleware;
module.exports.commonMiddleware2 = commonMiddleware2;