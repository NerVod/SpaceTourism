const express = require("express");
const router = express.Router();
const destinationHandler = require("./destinationHandler")

router.get("/moon", destinationHandler.getMoon);

module.exports = router;