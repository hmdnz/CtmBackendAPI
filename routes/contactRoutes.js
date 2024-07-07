const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteteContact,
} = require("../controller/contactController");

// Calling a route with @router.route

// The routes for CRUD operations below:
// GET ALL
// router.route("/").get(getContacts);

// // GET Single/ID

// router.route("/:id").get(getContact);

// // POST
// router.route("/:id").post(createContact);

// // PUT
// router.route("/:id").put(updateContact);

// // DELETE
// router.route("/:id").delete(deleteteContact);


// similar routes can be grouped like so:
router.route("/").get(getContacts);

// GET Single/ID // POST // PUT// DELETE

router.route("/:id").get(getContact).post(createContact).put(updateContact).delete(deleteteContact);


module.exports = router;
