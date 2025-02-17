const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

// Route to get all contacts and create a new contact
router
  .route("/")
  .get(getContacts)
  // post(createContact)
  .post(createContacts);

// Route to get, update, and delete a specific contact by ID
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
