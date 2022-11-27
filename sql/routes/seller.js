const express = require("express");
const pool = require("../database");
const router = express.Router();

/* Converting role string to int helper function */
function convertListingTypeToInt(type) {
  if (type === "Resale") {
    return 1;
  } else if (type === "Rental") {
    return 2;
  }
}

/* Endpoint to create new flat listing */
router.post("/addListing", async (req, res) => {
  try {
    const {
      postal_code,
      block,
      area,
      street,
      storey_range,
      num_of_rooms,
      floor_area_sqm,
      account_id,
      listing_type,
      price,
    } = req.body; // setting objects for easy reference
    console.log(block); // for debugging

    const listing_type_id = convertListingTypeToInt(listing_type);

    const insertNewFlatQuery = await pool.query(
      `WITH rows AS (
        INSERT INTO Flat (flat_id, postal_code, block, area, street, storey_range, num_of_rooms) VALUES
        (DEFAULT, ${postal_code}, '${block}', '${area}', '${street}','${storey_range}', '${num_of_rooms}', ${floor_area_sqm})
        RETURNING flat_id
    )
    INSERT INTO Listing (listing_id, account_id, flat_id, listing_type_id, price, date_of_listing)
    SELECT flat_id, ${account_id}, flat_id, ${listing_type_id}, ${price}, NOW()
    FROM rows;    
    `
    );

    res.sendStatus(201);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to update Flat Listing */
router.post("/updateListing", async (req, res) => {
  try {
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

    const listing_type_id = convertListingTypeToInt(listing_type);

    const updateFlatListingQuery = await pool.query(
      `
      UPDATE Listing SET price = ${price}
      WHERE Listing.listing_id = ${listing_id};
      
      UPDATE Listing SET listing_type_id = ${listing_type_id}
      WHERE Listing.listing_id = ${listing_id};
      
      UPDATE Flat SET postal_code = ${postal_code}
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});
      
      UPDATE Flat SET block = '${block}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});

      UPDATE Flat SET area = '${area}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});

      UPDATE Flat SET street = '${street}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});
      
      UPDATE Flat SET storey_range = '${storey_range}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});
      
      UPDATE Flat SET num_of_rooms = '${num_of_rooms}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});

      UPDATE Flat SET floor_area_sqm = ${floor_area_sqm}
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id});            
      `
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
    const { listing_id } = req.body; // setting objects for easy reference
    console.log(typeof listing_id); // for debugging

    const listing_id_int = parseInt(listing_id); // converts string to int

    console.log(typeof listing_id_int); // for debugging

    const deleteListingQuery = await pool.query(
      `DELETE FROM Listing WHERE listing_id = ${listing_id_int};`
    );

    res.sendStatus(204);
    return;
  } catch (err) {
    console.log(err);
  }
});

/* Endpoint to get one seller listing to populate update form values */
router.get("/oneListing", async (req, res) => {
  try {
    const { listing_id } = req.body; // setting objects for easy reference
    console.log(listing_id); // for debugging

    /* Query which returns a specific listing by id */
    const getListingQuery = await pool.query(
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
      WHERE L.listing_id = ${listing_id};
      `
    );

    console.log(getListingQuery.rows);

    res.json(getListingQuery.rows);
    return;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
