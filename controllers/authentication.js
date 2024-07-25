const User = require("../models/User");

const create_user = async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, email, phone, age, clubs, password } = req.body;

  if (!firstname || !lastname || !email || !phone || !age || !password) {
    return res
      .status(400)
      .send({ status: 400, message: "All fields are required!" });
  }

  if (clubs.length <= 1) {
    return res
      .status(400)
      .send({ status: 400, message: "You must support at least 2 clubs!" });
  }

  const exisiting_user = await User.findOne({ email: email });

  /* if (exisiting_user) {
    return res
      .status(409)
      .send({ status: 409, message: "Kindly use a different email address!" });
  } */

  try {
    const new_user = new User();

    new_user.firstname = firstname;
    new_user.lastname = lastname;
    new_user.email = email;
    new_user.phone = phone;
    new_user.age = age;
    new_user.clubs = clubs;
    new_user.password = password;

    const saved_user = await User.create(new_user);

    if (saved_user) {
      return res.send({ status: "200 Ok", user: saved_user });
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send({
      status: 500,
      message: "Oops something went wrong with our system",
    });
  }
};

const login_user = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      status: "400 Bad Request",
      errorMessage: "Please provide your username and password!",
    });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(400)
        .send({ status: "400", errorMessage: "Invalid login credentials" });
    }

    console.log(user);

    if (user.password === password) {
      return res.status(200).send({ status: "200 Ok", user: user });
    } else {
      return res.status(401).send({
        status: "401 access denied!",
        errorMessage: "Invalid Login Credentials",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "500 Internal Server Error",
      errorMessage: "Something went wrong within our server...",
    });
  }
};

module.exports = { create_user, login_user };
