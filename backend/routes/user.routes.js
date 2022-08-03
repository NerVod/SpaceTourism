const express = require("express");
const router = express.Router();
const destinationHandler = require("./destinationHandler")

router.get("/moon", destinationHandler.getMoon);
router.get("/mars", destinationHandler.getMars);
router.get("/europa", destinationHandler.getEuropa);
router.get("/titan", destinationHandler.getTitan);
router.get("/warmup", destinationHandler.warmup)
module.exports = router;