const authorModel = require("../userAuthor/authorModel");
const bookModel = require("../userBooks/bookModel")

const createAuthor = async function (req,res) {
    let data = req.body;
    let savedData = await authorModel.create(data)
    if (savedData.authorId > 3) {
        return res.send({msg: "Entry not allowed"})
    } else {
        return res.send(savedData);
    }
}

const createBook = async function (req,res) {
    let data = req.body;
    let savedData = await bookModel.create(data)
    if (savedData.authorId > 3) {
        return res.send({msg: "Entry not allowed"})
    } else {
        return res.send(savedData);
    }
}

const booksByChetanBhagat = async function (req, res) {
    let allBooks = await bookModel.find( {authorId: 1} ).select({name: 1, _id: 0})
    res.send({msg: allBooks});
}

const updateBookPrice = async function (req, res) {
    let data = req.body;
    let updatedBook = await bookModel.findOneAndUpdate({ name: "Two States" }, { $set: data }, {new: true});
    let author = await authorModel.find({authorId: {$eq: updatedBook.authorId}}).select({authorName: 1, _id:0});
    res.send({msg: author, updatedBook});
}

const findBooks = async function (req, res) {
    let allBooks1 = await bookModel.find({price: {$gte: 50, $lt: 100}});
    let ids = allBooks1.map(x=>x.authorId);
    let authors = await authorModel.find({authorId: ids}).select({authorName: 1, _id: 0});
    res.send({msg: authors, allBooks1});
}



module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.booksByChetanBhagat = booksByChetanBhagat;
module.exports.updateBookPrice = updateBookPrice;
module.exports.findBooks = findBooks;