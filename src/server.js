const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());


// Routes
app.use("/posts", require("./routes/posts"));


// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "API is running"
  });
});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });

})
.catch((err) => {
  console.error(err);
});