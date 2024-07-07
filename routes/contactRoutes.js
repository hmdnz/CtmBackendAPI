const express = require("express");
const router = express.Router();
const {getContacts, createContact,getContact,updateContact,deleteteContact} = require('../controller/contactController')

// Calling a route with @router.route

// The routes for CRUD operations below:
// GET ALL
router.route("/").get(getContact);

// GET Single/ID

router.route("/:id").post(createContact)

// POST
router.route("/:id").post();

// PUT
router.route("/").put(updateContact)

// DELETE
router.route("/").delete(deleteteContact);

module.exports = router;
