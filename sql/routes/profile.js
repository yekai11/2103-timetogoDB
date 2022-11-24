const express = require("express");
const pool = require("../database");
const router = express.Router();

router.post("/delete", async (req, res) => {
  try {
    const { accountID } = req.body; // setting objects for easy reference
    console.log(typeof accountID); // for debugging

    const accountID_int = parseInt(accountID); // converts string to int

    console.log(typeof accountID_int); // for debugging

    const deleteQuery = await pool.query(
      `DELETE FROM Account WHERE account_id = ${accountID_int}`
    );

    res.sendStatus(200);
    return;
  } catch (err) {
    console.log(err);
  }
});

router.post("/update", async (req, res) => {
  try {
    const { accountID, name, username, email, phoneNumber } = req.body; // setting objects for easy reference
    console.log(accountID); // for debugging

    const accountID_int = parseInt(accountID); // converts string to int
    const phoneNumber_int = parseInt(phoneNumber); // converts string to int

    const updateQuery = await pool.query(
    `
    UPDATE Account SET name = '${name}' WHERE account_id = ${accountID_int};
    UPDATE Account SET username = '${username}' WHERE account_id = ${accountID_int};
    UPDATE Account SET email = '${email}' WHERE account_id = ${accountID_int};
    UPDATE Account SET phone_number='${phoneNumber_int}' WHERE account_id= ${accountID_int};
    `
    );

    const returnUpdatedData = {
      accountID: accountID,
      name: name,
      username: username,
      email: email,
      phoneNumber: phoneNumber,
    }

    res.json(returnUpdatedData);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
