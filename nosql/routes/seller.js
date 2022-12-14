const express = require("express");
const assert = require("assert");
const database = require("../database");
const router = express.Router();

/* Endpoint to create new flat listing */
router.post("/addListing", async (req, res) => {
  try {
    const db = database.connect();
    const {
      postal_code,
      block,
      area,
      street,
      storey_range,
      num_of_rooms,
      floor_area_sqm,
      accountID,
      listing_type,
      price,
    } = req.body; // setting objects for easy reference
    console.log(block); // for debugging

    const newListing = {
      // Document for new listing
      listing_id: "",
      listing_type: listing_type.toLowerCase(),
      price: parseInt(price),
      date_of_listing: new Date(),
      postal_code: parseInt(postal_code),
      block: block,
      area: area,
      street: street,
      storey_range: storey_range,
      num_of_rooms: num_of_rooms,
      floor_area_sqm: parseInt(floor_area_sqm),
    };

    const listings = db
      .collection("listing")
      .find()
      .sort({ listing_id: -1 })
      .limit(1); // Get highest listing_id
    listings.forEach(
      (listing) => {
        newListing.listing_id = parseInt(listing.listing_id + 1); // Auto-increment listing_id
        console.log(listing.listing_id + 1);
      },
      () => {
        // Insert into listing collection
        db.collection("listing").insertOne(newListing, (err, result) => {
          assert.equal(null, err);
        });

        // Insert into account collection
        db.collection("account").updateOne(
          { account_id: parseInt(accountID) },
          { $set: { listing_id: parseInt(newListing.listing_id) } },
          (err, result) => {
            assert.equal(null, err);
            res.sendStatus(201);
            // database.close();
          }
        );
      }
    );
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to update Flat Listing */
router.post("/updateListing", async (req, res) => {
  try {
    const db = database.connect();
    const {
      listing_id,
      postal_code,
      block,
      area,
      street,
      storey_range,
      num_of_rooms,
      floor_area_sqm,
      listing_type,
      price,
    } = req.body; // setting objects for easy reference
    console.log(block); // for debugging

    const newListing = {
      // Document for new listing
      listing_id: parseInt(listing_id),
      listing_type: listing_type.toLowerCase(),
      price: parseInt(price),
      date_of_listing: new Date(),
      postal_code: parseInt(postal_code),
      block: block,
      area: area,
      street: street,
      storey_range: storey_range,
      num_of_rooms: num_of_rooms,
      floor_area_sqm: parseInt(floor_area_sqm),
    };

    db.collection("listing").updateOne(
      { listing_id: parseInt(listing_id) },
      { $set: newListing },
      (err, result) => {
        assert.equal(null, err);
        // database.close();
      }
    );

    const returnUpdatedData = {
      listing_id: listing_id,
      postal_code: postal_code,
      block: block,
      area: area,
      street: street,
      storey_range: storey_range,
      num_of_rooms: num_of_rooms,
      floor_area_sqm: floor_area_sqm,
      listing_type: listing_type,
      price: price,
    };

    res.json(returnUpdatedData);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to delete listing */
router.post("/deleteListing", async (req, res) => {
  try {
    const db = database.connect();
    const { listing_id } = req.body; // setting objects for easy reference
    console.log(typeof listing_id); // for debugging - maybe need to parseInt()

    // Delete from listing collection
    db.collection("listing").deleteOne(
      { listing_id: listing_id },
      (err, res) => {
        assert.equal(null, err);
        // database.close();
      }
    );

    // Remove listing from account
    db.collection("account").updateOne(
      { listing_id: listing_id },
      { $unset: { listing_id: "" } },
      (err, result) => {
        assert.equal(null, err);
        // database.close();
      }
    );

    res.sendStatus(204);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to get one seller listing to populate update form values */
router.get("/oneListing/:account_id", async (req, res) => {
  try {
    const db = database.connect();
    const { account_id } = req.params; // setting objects for easy reference
    console.log(account_id); // for debugging

    /* Query which returns a specific listing by id */
    const account = await db
      .collection("account")
      .findOne({ account_id: parseInt(account_id) });
    const listing = await db
      .collection("listing")
      .findOne({ listing_id: parseInt(account.listing_id) });
    res.json(listing);
    // database.close();
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
