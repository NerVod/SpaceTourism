const express = require("express");
const router = express.Router();
const destinationHandler = require("./destinationHandler")
const crewHandler = require("./crewHandler")

router.get("/warmup", destinationHandler.warmup)
router.get("/moon", destinationHandler.getMoon);
router.get("/mars", destinationHandler.getMars);
router.get("/europa", destinationHandler.getEuropa);
router.get("/titan", destinationHandler.getTitan);
router.get("/commander",crewHandler.getCommander);
router.get("/specialist",crewHandler.getSpecialist);
router.get("/pilot",crewHandler.getPilot);
router.get("/engeneer",crewHandler.getEngeneer);

module.exports = router;