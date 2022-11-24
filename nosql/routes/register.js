const express = require("express");
const assert = require("assert");
const database = require("../database");
const bcrypt = require("bcrypt");
const validator = require("validator");
const router = express.Router();

const saltRounds = 10; // change this to increase salt level

/* Validation helper function */
function validateFields({ name, email, phoneNumber, role }) {
    name = name.replace(/\s+/g, ""); // removes spaces from name
    if (!validator.isAlpha(name)) {
        // console.log("inside name validation");
        return false;
    }

    if (!validator.isEmail(email)) {
        // console.log("inside email validation");
        return false;
    }

    if (!validator.isInt(phoneNumber)) {
        // console.log("inside phonenumber validation");
        return false;
    }

    const buyer = "Buyer";
    const seller = "Seller";
    if (role != buyer && role != seller) {
        // console.log("inside role validation");
        return false;
    }
    console.log("validation passed");

    return true;
}

router.post("/", async (req, res) => {
    try {
        const db = database.connect();
        const { name, username, email, password, phoneNumber, role } = req.body; // setting objects for easy reference
        // console.log(name, username, email, password, phoneNumber, role); // for debugging

        const collection = role.toLowerCase();
        const validation = validateFields({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            role: role,
        });

        // console.log("after validation function");

        if (!validation) {
            res.sendStatus(400); // send error code 400 to frontend
            return;
        }

        const emailExists = await db.collection(collection).findOne({ email: email });
        if (emailExists !== null) { // email already registered in database
            res.sendStatus(409); // send error code 409 to frontend
            return;
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds); // hash and salting password using bcrypt
        const myObj = {
            account_id: '',
            role_id: role,
            name: name,
            username: username,
            password: hashedPassword,
            email: email,
            phone_number: phoneNumber,
            interested: []
        };

        const accounts = db.collection(collection).find().sort({ account_id: -1 }).limit(1); // Get highest account_id
        accounts.forEach(account => {
            myObj.account_id = account.account_id + 1 // Simulate auto increment
        });

        db.collections(collection).insertOne(myObj, (err, result) => {
            assert.equal(null, err);
            // console.log("Account created");
            database.close();
        });

        res.sendStatus(201);
        return;
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
