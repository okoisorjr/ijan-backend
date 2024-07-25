const User = require("../models/User");

const create_user = async (req, res) => {
  const { firstname, lastname, email, phone, age, clubs, password } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !age ||
    clubs.length <= 1 ||
    !password
  ) {
    return res
      .status(400)
      .send({ status: 400, message: "All fields are required!" });
  }

  const exisiting_user = await User.findOne({ email: email });

  if(exisiting_user) {
    return res.status(409).send({ status: 409, message: 'Kindly use a different email address!' });
  }

  try {
    const new_user = new User();

    new_user.firstname = firstname;
    new_user.lastname = lastname;
    new_user.email = email;
    new_user.phone = phone;
    new_user.clubs = clubs;
    new_user.password = password;

    const saved_user = await User.create(new_user);
  } catch (error) {
    console.log("Error:", error);
    return res
      .status(500)
      .send({
        status: 500,
        message: "Oops something went wrong with our system",
      });
  }
};

const login_user = () => {};

module.exports = { create_user, login_user };
