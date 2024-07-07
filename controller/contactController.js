//@desc get all contacts
//@route GET api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc get  a contact
//@route GET api/contacts:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc post a contact
//@route POST api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  res.status(201).json({ message: `Create Contact` });
};

//@desc Update a contact
//@route UODATE api/contacts
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc delete a contact
//@route DELETE api/contacts
//@access public
const deleteteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteteContact,
};
