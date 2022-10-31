const authorModel = require("../models/newAuthorModel");
const publisherModel = require("../models/newPublisherModel");
const bookModel = require("../models/newBookModel");

const createAuthor = async function (req, res) {
    let data = req.body
    let author = await authorModel.create(data);
    return res.send({msg: author});
}

const createPublisher = async function (req, res) {
    let data2 = req.body
    let publisher = await publisherModel.create(data2);
    return res.send({msg: publisher});
}

const createNewBook = async function (req, res) {
    let data3 = req.body
    let { authorId, publisherId } = data3;
    if (!authorId) {
        return res.send({msg: "Error authorId is required"});
    }
    if (!publisherId) {
        return res.send({msg: "Error publisherId is required"})
    }
    let newBook = await bookModel.create(data3);
    return res.send({msg: newBook});
}

const allBooks = async function (req, res) {
    let booksAll = await bookModel.find().populate([{path: "authorId"}, {path: "publisherId"}]);
    return res.send({msg: booksAll});
}

module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createNewBook = createNewBook;
module.exports.allBooks = allBooks;

 