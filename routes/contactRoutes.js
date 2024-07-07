const express = require("express");
const router = express.Router();

// Calling a route with @router.route

// The routes for CRUD operations below:
// GET ALL
router.route("/").get();

// GET Single/ID

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// POST
router.route("/:id").post((req, res) => {
  res.status(201).json({ message: `Create Contact for ${req.params.id}` });
});

// PUT
router.route("/").put((req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

// DELETE
router.route("/").delete((req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = router;
