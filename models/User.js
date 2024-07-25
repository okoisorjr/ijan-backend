const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    clubs: { type: [String], required: true },
    password: { type: String, maxLength: 16, minLength: 8, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = { User };
