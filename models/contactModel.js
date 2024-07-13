const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number"],
    },
  },
  { timestamps: true }
);

// Mongoose automatically assigns a unique ObjectId for each document
contactSchema.pre('save', function(next) {
  // This middleware is optional, but you can use it to perform any validation or logic before saving the contact
  next();
});

module.exports = mongoose.model("Contact", contactSchema);
