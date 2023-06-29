const express = require("express");
const db = require("./db");
const PORT = "8080";

const app = express();

// Mount on API
app.use("/api", require("./api"));

// Syncing DB Function
const syncDB = () => db.sync({force: true});

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;