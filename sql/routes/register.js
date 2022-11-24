const express = require("express");
const pool = require("../database");
const router = express.Router();
const bcrypt = require("bcrypt");
var validator = require("validator");

const saltRounds = 10; // change this to increase salt level

/* Validation helper function */
function validateFields({ name, email, phoneNumber, role }) {
  name = name.replace(/\s+/g, ""); // removes spaces from name
  if (!validator.isEmail(email)) {
    // console.log("inside email validation");
    return false;
  }
  if (!validator.isAlpha(name)) {
    // console.log("inside name validation");
    return false;
  }
  if (!validator.isInt(phoneNumber)) {
    // console.log("inside phonenumber validation");
    return false;
  }
  const buyer = "Buyer";
  const seller = "Seller";
  if (role != buyer && role != seller) {
    // console.log("inside role validation");
    return false;
  }
  console.log("validation pased");
  return true;
}

/* Converting role string to int helper function */
function convertRoleToInt(role) {
  if (role === "Buyer") {
    return 1;
  } else if (role === "Seller") {
    return 2;
  }
}

router.post("/", async (req, res) => {
  try {
    const { name, username, email, password, phoneNumber, role } = req.body; // setting objects for easy reference
    // console.log(name, username, email, password, phoneNumber, role); // for debugging

    const validation = validateFields({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      role: role,
    });

    // console.log("after validation function");

    if (!validation) {
      res.sendStatus(400); // send error code 400 to frontend
      return;
    }

    const emailQuery = await pool.query(`SELECT email FROM public.account WHERE
    email = '${email}' `);

    if (emailQuery.rowCount != 0) {
      // email already registered in database
      res.sendStatus(409); // send error cod 409 to frontend
      return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds); // hash and salting password using bcrypt
    const roleToInteger = convertRoleToInt(role); // converting role string to integer

    // console.log(
    //   name,
    //   username,
    //   email,
    //   hashedPassword,
    //   phoneNumber,
    //   roleToInteger
    // ); // for debugging

    const registerQuery = await pool.query(`INSERT INTO Account
        VALUES ((SELECT MAX(account_id)+1 FROM Account), ${roleToInteger}, '${name}', '${username}', '${hashedPassword}', '${email}', '${phoneNumber}');
        `);

    //   console.log("submittedSQL");

    res.sendStatus(201);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
