const express = require("express")
const router = express.Router()
const nodeContactController = require("../controller/contactController")
//GET
router.get("/", nodeContactController.GetAllContact);
//POST
 router.post("/", nodeContactController.PostEachContact);
// //FIND
// router.get("/:id", controllerContact.FindById);
// //DELETE
// router.delete("/:id", controllerContact.DeleteByID);
// //PUT
 router.put("/:id", nodeContactController.NodeUpdatedByID);

module.exports = router