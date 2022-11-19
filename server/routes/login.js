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

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const loginQuery =
      await pool.query(`SELECT email, password FROM public.account WHERE
    email = '${email}' `);

    if (loginQuery.rowCount === 0) {
    //   console.log("inside checking if email found");
      res.sendStatus(401); // return error code 1, email not found
      return;
    } else {
    //   console.log(JSON.stringify({ loginQuery }));
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
      } else {
        // console.log("log in success");
        res.sendStatus(200);
        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
