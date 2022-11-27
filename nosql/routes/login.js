const express = require("express");
const database = require("../database");
const bcrypt = require("bcrypt");
const router = express.Router();

/* helper function to check password */
function comparePassword({ enteredPassword, hashedPassword }) {
    const compare = bcrypt.compare(enteredPassword, hashedPassword);
    return compare;
}

/* Endpoint for login */
router.post("/", async (req, res) => {
    try {
        const db = database.connect();
        const { email, password } = req.body;

        let account = await db.collection("account").findOne({ email: email });
        if (account === null) {
            res.sendStatus(401); // return error code, email not found
            return;
        }

        const passwordMatch = await comparePassword({
            enteredPassword: password,
            hashedPassword: account.password,
        }); //comparing passwords with helper function

        if (!passwordMatch) {
            // console.log("in password not matched");
            res.sendStatus(401); // return error code, password not matched
            return;
        }

        const accountDetails = { // put account details in a json file
            accountID: account.account_id,
            role: account.role_id,
            name: account.name,
            username: account.username,
            email: account.email,
            phoneNumber: account.phone_number,
        };

        // console.log(JSON.stringify(accountDetails));

        res.json(accountDetails);
        console.log("log in success");
        database.close();
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;