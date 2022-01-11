const express = require("express");

const app = express();
require("dotenv").config();

app.use(express.json());

const db = require("./route/database");
const user = require("./route/user");

app.use("/v1/users", user);
app.use("/v1/database/collections", db);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is connected at the port ${port}`);
});

