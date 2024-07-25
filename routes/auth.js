const express = require("express");
const authentication = require("../controllers/authentication");

const router = express.Router();

router.get("", (req, res) => {
  return res.send("Welcome to IJAN");
});
router.post("/create-account", authentication.create_user);

module.exports = router;
