const { MongoClient } = require("mongodb-legacy");

const dbName = "houseDB";
const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });

// Connect to server
module.exports = {
    connect: () => {
        try {
            client.connect();
            console.log("Successfully connected to MongoDB server.");
            return client.db(dbName);
        } catch (err) {
            console.log(err);
        }
    },
    close: async () => await client.close(),
}