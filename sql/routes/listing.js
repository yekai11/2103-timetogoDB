const express = require("express");
const pool = require("../database");
const router = express.Router();

/* Endpoint to one listing */
router.get("/getListing/:listing_id", async (req, res) => {
  try {
    const { listing_id } = req.params; // setting objects for easy reference
    console.log(listing_id); // for debugging

    const listing_id_int = parseInt(listing_id);

    const getListingQuery = await pool.query(
      `
      SELECT L.listing_id, L.price, L.date_of_listing, F.postal_code, F.block, F.area, F.street, F.storey_range, F.num_of_rooms, F.floor_area_sqm,
      LT.listing_type
      FROM Flat As F
      JOIN
      Listing AS L
      ON L.flat_id = F.flat_id
      JOIN
      ListingType AS LT
      ON L.listing_type_id = LT.listing_type_id
      WHERE L.listing_id = ${listing_id_int};
      `
    );

    res.json(getListingQuery.rows[0]);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
