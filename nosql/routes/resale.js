const express = require("express");
const database = require("../database");
const assert = require("assert");
const router = express.Router();

// const convertFormatToDB_Price = (selectedPrice) => {
//   if (selectedPrice === "$200k & below") {
//     return "<= 200000";
//   } else if (selectedPrice === "$201k - $300k") {
//     return "BETWEEN 200001 AND 300000";
//   } else if (selectedPrice === "$301k - $400k") {
//     return "BETWEEN 300001 AND 400000";
//   } else if (selectedPrice === "$401k - $500k") {
//     return "BETWEEN 400001 AND 500000";
//   } else if (selectedPrice === "$501k - $600k") {
//     return "BETWEEN 500001 AND 600000";
//   } else if (selectedPrice === "$601k & Above") {
//     return "> 600001";
//   }
// };

// const convertFormatToDB_FloorRange = (selectedFloor) => {
//   if (selectedFloor === "1st Floor - 3rd Floor") {
//     return "01 TO 03";
//   } else if (selectedFloor === "4th Floor - 6th Floor") {
//     return "04 TO 06";
//   } else if (selectedFloor === "7th Floor - 9th Floor") {
//     return "07 TO 09";
//   } else if (selectedFloor === "10th Floor - 12th Floor") {
//     return "10 TO 12";
//   } else if (selectedFloor === "13th Floor - 15th Floor") {
//     return "13 TO 15";
//   } else if (selectedFloor === "16th Floor - 18th Floor") {
//     return "16 TO 18";
//   } else if (selectedFloor === "19th Floor - 21st Floor") {
//     return "19 TO 21";
//   } else if (selectedFloor === "22nd Floor - 24th Floor") {
//     return "22 TO 24";
//   } else if (selectedFloor === "25th Floor - 27th Floor") {
//     return "25 TO 27";
//   } else if (selectedFloor === "28th Floor - 30th Floor") {
//     return "28 TO 30";
//   } else if (selectedFloor === "31st Floor - 33rd Floor") {
//     return "31 TO 33";
//   } else if (selectedFloor === "34th Floor - 36th Floor") {
//     return "34 TO 36";
//   } else if (selectedFloor === "37th Floor - 39th Floor") {
//     return "37 TO 39";
//   } else if (selectedFloor === "40th Floor - 42nd Floor") {
//     return "40 TO 42";
//   } else if (selectedFloor === "43rd Floor - 45th Floor") {
//     return "43 TO 45";
//   } else if (selectedFloor === "46th Floor - 48th Floor") {
//     return "46 TO 48";
//   } else if (selectedFloor === "49th Floor - 51st Floor") {
//     return "49 TO 51";
//   }
// };

/* Endpoint to get all resale flat listings */
router.get("/allResale", async (req, res) => {
    try {
        let listings = [];
        const db = database.connect();
        const query = db.collection("listing").find({ listing_type: "resale" });
        query.forEach((listing, err) => {
            assert.equal(err, null);
            listings.push(listing);
        }, () => {
            res.json(listings);
            database.close();
        });
        return;
    } catch (err) {
        console.log(err);
    }
});

/* Endpoint for resale filter */
// router.post("/filterResale", async (req, res) => {
//   try {
//     const { accountID } = req.body; // setting objects for easy reference
//     console.log(typeof accountID); // for debugging

//     const accountID_int = parseInt(accountID); // converts string to int

//     console.log(typeof accountID_int); // for debugging

//     const deleteQuery = await pool.query(
//       `DELETE FROM Account WHERE account_id = ${accountID_int}`
//     );

//     res.sendStatus(200);
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
