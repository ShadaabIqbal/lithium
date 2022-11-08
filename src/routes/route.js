const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/auth");

router.post("/createUser", userController.createUser);
router.post("/loginUser", userController.userLogin);
router.get("/userDetails/:userId", userMiddleware.tokenCheck, userController.getUserDetails);
router.put("/updateUserDetails/:userId", userMiddleware.tokenCheck, userController.updateUserDetails);
router.delete("/deleteUserDetails/:userId", userMiddleware.tokenCheck, userController.deleteUserDetails);

module.exports = router;