const mongoose = require("mongoose");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
};

// @desc Create a contact
// @route POST /api/contacts
// @access public
// SINGLE ENTRY
// const createContact = async (req, res) => {
//   console.log("The request body is: ", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     return res.status(400).json({ message: "All fields are mandatory" });
//   }

//   const contact = await Contact.create({ name, email, phone });
//   res.status(201).json(contact);
// };


// BATCH AND SINGLE ENTRY
const createContacts = async (req, res) => {
  console.log("The request body is: ", req.body);

  // Check if req.body is an array or a single object
  const contacts = Array.isArray(req.body) ? req.body : [req.body];

  // Check if all objects in the array have name, email, and phone
  for (const contact of contacts) {
    const { name, email, phone } = contact;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }
  }

  // Create contacts in bulk if it's an array, otherwise create a single contact
  if (Array.isArray(req.body)) {
    const createdContacts = await Contact.insertMany(contacts);
    res.status(201).json(createdContacts);
  } else {
    const createdContact = await Contact.create(req.body);
    res.status(201).json(createdContact);
  }
};

// @desc Update a contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
};

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json({ message: `Deleted contact with id ${req.params.id}` });
};

module.exports = {
  getContacts,
  // createContact,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
