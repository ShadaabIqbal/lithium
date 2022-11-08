const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

router.get("/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/checkAppointment", CowinController.checkAppointmentByDistrict)

module.exports = router;