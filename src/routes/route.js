const express = require('express');
const router = express.Router();
const userController = require("../controllers/controller");
const myMiddleware = require("../middlewares/commonMiddlewares");

router.get("/basicRoute", myMiddleware.mid1, userController.basicCode);

module.exports = router;