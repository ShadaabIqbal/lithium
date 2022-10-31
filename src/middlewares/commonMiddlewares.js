const mid1= function ( req, res, next) {
    console.log("This is my first middleware")
    next()
}

module.exports.mid1= mid1;

