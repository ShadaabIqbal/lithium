const express = require('express');
const router = express.Router();
const bookModel = require("../bookModel/bookModel");
const userController =require("../controllers/controller")

router.post("/createBook", userController.createBook);
router.get("/bookList", userController.getBookData);
router.post("/getBooksInYear", userController.getBooksInYear);
router.get("/getRandom", userController.getRandomBooks);
router.get("/getXINR", userController.getXINRBooks);

module.exports = router;