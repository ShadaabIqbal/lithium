const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    authorId: Number,
    price: Number,
    ratings: Number
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);