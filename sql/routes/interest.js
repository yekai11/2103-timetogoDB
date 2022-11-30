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
    const { listing_id } = req.body; // setting objects for easy reference
    console.log(listing_id); // for debugging

    const listing_id_int = parseInt(listing_id);

    const getInterest_id = await pool.query(
      `SELECT interest_id WHERE listing_id  = ${listing_id_int})`
    );

    if (getInterest_id.rowCount != 0) {
      const interest_id = parseInt(getInterest_id.rows[0].interest_id);

      console.log(typeof interest_id);

      const deleteInterestQuery = await pool.query(
        `DELETE FROM Interest WHERE interest_id = ${interest_id};`
      );

      res.sendStatus(204);
      return;
    }
    else {
     res.sendStatus(404)
    }
    
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
      `
      SELECT L.listing_id, L.price, L.date_of_listing, F.postal_code, F.block, F.area, F.street, F.storey_range, F.num_of_rooms, F.floor_area_sqm,
      A.name, A.username, A.email, A.phone_number,
      LT.listing_type
      FROM Flat As F
      JOIN
      Listing AS L
      ON L.flat_id = F.flat_id
      JOIN
      Account AS A
      ON L.account_id = A.account_id
      JOIN
      ListingType AS LT
      ON L.listing_type_id = LT.listing_type_id
      WHERE L.listing_id = 
      (SELECT listing_id FROM Interest WHERE account_id = ${account_id});`
    );

    res.json(accountInterestQuery.rows);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
