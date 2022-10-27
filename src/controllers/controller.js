const bookModel = require("../bookModel/bookModel")

const createBook = async function (req, res) {
    let data= req.body;
    let savedData = await bookModel.create(data);
    res.send(savedData);
}

const getBookData = async function (req, res) {
    let allBooks = await bookModel.find().select({ bookName: 1, authorName:1, _id:0 })
    res.send(allBooks);
}

const getBooksInYear = async function (req, res) {
    let year = req.body.year
    let letbooksInYear = await bookModel.find({year})
    res.send(letbooksInYear);
}

const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModel.find( { $or: [ {totalPages : { $gt: 500 } }, {stocksAvailable:true }]})
    res.send({msd: randomBooks});
}

const getXINRBooks = async function(req,res) {
    let allXINR = await bookModel.find({indianPrice: {$in: ["100INR", "200INR", "500INR"]}})
    res.send(allXINR);
}



module.exports.createBook = createBook;
module.exports.getBookData = getBookData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getXINRBooks = getXINRBooks;
