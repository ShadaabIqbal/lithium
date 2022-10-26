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
    let year = req.query.year
    let letbooksInYear = await bookModel.find({year})
    res.send(letbooksInYear);
}

const getParticularBooks = async function (req, res) {
    let author = req.query.authorName;
    let book = req.query.bookName;
    let yearPublished = req.query.year;
    let pages = req.query.totalPages;
    let availableStock = req.query.stockAvailable;
    let particularBooks = await bookModel.find({
        $or: [{ authorName: author }, { bookName: book }, {year: yearPublished}, { totalPages: pages }, {stocksAvailable: availableStock }]
    });
    res.send( { msd: particularBooks } );
}

const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModel.find( { $or: [ {totalPages : { $gt: 500 } }, {stocksAvailable: {$eq: true} } ] } )
    res.send({msd: randomBooks});
}

module.exports.createBook = createBook;
module.exports.getBookData = getBookData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getRandomBooks = getRandomBooks;
