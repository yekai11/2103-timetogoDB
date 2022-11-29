const express = require("express");
const pool = require("../database");
const router = express.Router();

/* Converting role string to int helper function */
function convertListingTypeToInt(type) {
  if (type === "resale") {
    return 1;
  } else if (type === "rental") {
    return 2;
  }
}

/* Converting Floor range strings to db format */
const convertFormatToDB_FloorRange = (selectedFloor) => {
  if (selectedFloor === "1st Floor - 3rd Floor") {
    return "01 TO 03";
  } else if (selectedFloor === "4th Floor - 6th Floor") {
    return "04 TO 06";
  } else if (selectedFloor === "7th Floor - 9th Floor") {
    return "07 TO 09";
  } else if (selectedFloor === "10th Floor - 12th Floor") {
    return "10 TO 12";
  } else if (selectedFloor === "13th Floor - 15th Floor") {
    return "13 TO 15";
  } else if (selectedFloor === "16th Floor - 18th Floor") {
    return "16 TO 18";
  } else if (selectedFloor === "19th Floor - 21st Floor") {
    return "19 TO 21";
  } else if (selectedFloor === "22nd Floor - 24th Floor") {
    return "22 TO 24";
  } else if (selectedFloor === "25th Floor - 27th Floor") {
    return "25 TO 27";
  } else if (selectedFloor === "28th Floor - 30th Floor") {
    return "28 TO 30";
  } else if (selectedFloor === "31st Floor - 33rd Floor") {
    return "31 TO 33";
  } else if (selectedFloor === "34th Floor - 36th Floor") {
    return "34 TO 36";
  } else if (selectedFloor === "37th Floor - 39th Floor") {
    return "37 TO 39";
  } else if (selectedFloor === "40th Floor - 42nd Floor") {
    return "40 TO 42";
  } else if (selectedFloor === "43rd Floor - 45th Floor") {
    return "43 TO 45";
  } else if (selectedFloor === "46th Floor - 48th Floor") {
    return "46 TO 48";
  } else if (selectedFloor === "49th Floor - 51st Floor") {
    return "49 TO 51";
  }
};

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
      accountID,
      listing_type,
      price,
    } = req.body; // setting objects for easy reference
    console.log(block); // for debugging

    // const listing_id_int = parseInt(listing_id); // convert
    const price_int = parseInt(price); // convert Price to int
    const postal_code_int = parseInt(postal_code); // convert Postal to int
    const floor_area_sqm_int = parseInt(floor_area_sqm); // convert FloorSize to int
    const account_id_int = parseInt(accountID); // convert FloorSize to int
    const listing_type_int = convertListingTypeToInt(listing_type); // converts listing type to int values in database

    const storey_range_DB = convertFormatToDB_FloorRange(storey_range); // converts storey_range to db format

    // console.log(
    //   price_int,
    //   postal_code_int,
    //   floor_area_sqm_int,
    //   account_id_int,
    //   listing_type_int,
    //   storey_range_DB,
    //   block,
    //   area,
    //   street,
    //   num_of_rooms
    // ); // for debugging

    const insertNewFlatQuery = await pool.query(
      `WITH rows AS (
        INSERT INTO Flat (flat_id, postal_code, block, area, street, storey_range, num_of_rooms, floor_area_sqm) VALUES
        (DEFAULT, ${postal_code_int}, '${block}', '${area}', '${street}','${storey_range_DB}', '${num_of_rooms}', ${floor_area_sqm_int})
        RETURNING flat_id
    )
    INSERT INTO Listing (listing_id, account_id, flat_id, listing_type_id, price, date_of_listing)
    SELECT flat_id, ${account_id_int}, flat_id, ${listing_type_int}, ${price_int}, NOW()
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
    console.log(JSON.stringify(req.body)); // for debugging

    const listing_id_int = parseInt(listing_id); // convert
    const price_int = parseInt(price); // convert Price to int
    const postal_code_int = parseInt(postal_code); // convert Postal to int
    const floor_area_sqm_int = parseInt(floor_area_sqm); // convert FloorSize to int
    const listing_type_int = convertListingTypeToInt(listing_type); // converts listing type to int values in database

    const storey_range_DB = convertFormatToDB_FloorRange(storey_range); // converts storey_range to db format

    const updateFlatListingQuery = await pool.query(
      `
      UPDATE Listing SET price = ${price_int}
      WHERE Listing.listing_id = ${listing_id_int};
      
      UPDATE Listing SET listing_type_id = ${listing_type_int}
      WHERE Listing.listing_id = ${listing_id_int};
      
      UPDATE Flat SET postal_code = ${postal_code_int}
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});
      
      UPDATE Flat SET block = '${block}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});

      UPDATE Flat SET area = '${area}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});

      UPDATE Flat SET street = '${street}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});
      
      UPDATE Flat SET storey_range = '${storey_range_DB}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});
      
      UPDATE Flat SET num_of_rooms = '${num_of_rooms}'
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});

      UPDATE Flat SET floor_area_sqm = ${floor_area_sqm_int}
      WHERE Flat.flat_id = 
      (SELECT flat_id FROM Listing WHERE Listing.listing_id = ${listing_id_int});            
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
router.get("/oneListing/:listing_id", async (req, res) => {
  try {
    const { listing_id } = req.params; // setting objects for easy reference
    console.log(listing_id); // for debugging

    /* Query which returns a specific listing by id */
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
      WHERE L.account_id = ${account_id};
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
