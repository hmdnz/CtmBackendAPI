const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const contactSchema = new mongoose.Schema(
  {
    customId: {
      type: String,
      unique: true,
      default: () => uuidv4().slice(0, 6) // Adjust the slice length as needed
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"]
    },
    email: {
      type: String,
      required: [true, "Please add the email"]
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
