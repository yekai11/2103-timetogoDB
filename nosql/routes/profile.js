const express = require("express");
const assert = require("assert");
const database = require("../database");
const router = express.Router();

router.post("/delete", async (req, res) => {
  try {
    const db = database.connect();
    const { accountID } = req.body; // setting objects for easy reference
    console.log(typeof accountID); // for debugging

    db.collection("account").deleteOne({ account_id: accountID }, (err, result) => {
      assert.equal(null, err);
      console.log("Account deleted.");
      database.close();
    })

    res.sendStatus(200);
    return;
  } catch (err) {
    console.log(err);
  }
});

router.post("/update", async (req, res) => {
  try {
    const db = database.connect();
    const { accountID, name, username, email, phoneNumber } = req.body; // setting objects for easy reference
    console.log(accountID); // for debugging

    const myObj = {
      account_id: accountID,
      username: username,
      phone_number: phoneNumber,
      name: name
    }

    db.collection("account").updateOne({ account_id: accountID }, { $set: myObj }, (err, result) => {
      assert.equal(null, err);
      console.log("Account updated.");
      database.close();
    })

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
