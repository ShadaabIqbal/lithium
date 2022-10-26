const express = require('express');
const router = express.Router();
const bookModel = require("../bookModel/bookModel");
const userController =require("../controllers/controller")

router.post("/createBook", userController.createBook);
router.get("/bookList", userController.getBookData);
router.post("/getBooksInYear", userController.getBooksInYear);
router.post("/getParticularBooks", userController.getParticularBooks);
router.get("/getRandom", userController.getRandomBooks);




module.exports = router;