const express = require("express");
const pool = require("../database");
const router = express.Router();
const bcrypt = require("bcrypt");

/* helper function to check password */
function comparePassword({ enteredPassword, hashedPassword }) {
  const compare = bcrypt.compare(enteredPassword, hashedPassword);
  // console.log(compare);
  return compare;
}

/* helper function to convert role id to string */
function roleIDConvertToString(role) {
  if (role === 1) {
    return "Buyer";
  } else if (role === 2) {
    return "Seller";
  }
}

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const loginQuery =
      await pool.query(`SELECT account_id, role_id, name, username, password, email, phone_number FROM public.account WHERE
    email = '${email}' `);

    if (loginQuery.rowCount === 0) {
      //   console.log("inside checking if email found");
      res.sendStatus(401); // return error code 1, email not found
      return;
    }
    console.log(JSON.stringify({ loginQuery }));
    //   console.log(loginQuery.rows[0].password);

    const retrievedPassword = loginQuery.rows[0].password; // store retrieved password in constant

    passwordMatch = await comparePassword({
      //comparing passwords with helper function
      enteredPassword: password,
      hashedPassword: retrievedPassword,
    });

    if (!passwordMatch) {
      // console.log("in password not matched");
      res.sendStatus(401); // return error code 2, password not matched
      return;
    }

    const roleIDtoString = roleIDConvertToString(loginQuery.rows[0].role_id); // converts role from id stored in db to string

    const accountDetails = { // put account details in a json file
      accountID: loginQuery.rows[0].account_id,
      role: roleIDtoString,
      name: loginQuery.rows[0].name,
      username: loginQuery.rows[0].username,
      email: loginQuery.rows[0].email,
      phoneNumber: loginQuery.rows[0].phoneNumber,
    };

    // console.log(JSON.stringify(accountDetails));

    // console.log("log in success");
    res.json(accountDetails);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
