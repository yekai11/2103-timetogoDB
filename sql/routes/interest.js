const express = require("express");
const pool = require("../database");
const router = express.Router();

/* Endpoint to add interest */
router.post("/addInterest", async (req, res) => {
  try {
    const { account_id, listing_id } = req.body; // setting objects for easy reference
    console.log(account_id); // for debugging

    const insertInterestQuery = await pool.query(
      `INSERT INTO Interest (interest_id, account_id, listing_id) 
      VALUES (DEFAULT, ${account_id}, ${listing_id});`
    );

    res.sendStatus(201);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to delete interest */
router.post("/deleteInterest", async (req, res) => {
  try {
    const { interest_id } = req.body; // setting objects for easy reference
    console.log(interest_id); // for debugging

    const deleteInterestQuery = await pool.query(
      `DELETE FROM Interest WHERE interest_id = ${interest_id};`
    );

    res.sendStatus(204);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to get all listings where 1 account is interested in */
router.get("/accountInterest/:account_id", async (req, res) => {
  try {
    const { account_id } = req.params; // setting objects for easy reference
    console.log(account_id); // for debugging

    const accountInterestQuery = await pool.query(
      `SELECT listing_id FROM Interest WHERE account_id = ${account_id};`
    );

    res.json(accountInterestQuery.rows);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
