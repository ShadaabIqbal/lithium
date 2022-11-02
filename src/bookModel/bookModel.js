const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema ({
    Name: String,
    Price: Number
})

module.exports = mongoose.model("newBook2", bookSchema);