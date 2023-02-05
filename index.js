const express = require("express");
require("dotenv").config();
require("./config/database").connect();
const router = require("./routes/postRouter");
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", router);

//---test----
app.get("/", (req, res) => {
  res.send("Hi my Lord!");
});

app.listen(port, () => {
  console.log("Server start");
});
