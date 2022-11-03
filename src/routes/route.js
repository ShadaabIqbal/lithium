const express = require('express');
const router = express.Router();
const userController = require("../CONTROLLERS/userController");
const Middleware = require("../middleware/auth");

router.post("/createUser", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/getUser/:userId", Middleware.commonMiddleware, userController.getUserData);
router.put("/update/:userId", Middleware.commonMiddleware, userController.updateUser);
router.delete("/deleteUser/:userId", Middleware.commonMiddleware, userController.deleteUser);

module.exports = router;