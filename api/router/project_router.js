const express = require("express")
const router = express.Router()
const shortenController = require("../controller/shortenController")
//GET
//router.get("/", nodeContactController.GetAllContact);
//POST
router.post("/:urlshort(*)", shortenController.PostEachUrl);


module.exports = router