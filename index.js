const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const locationsRouter = require("./server/routes/locations");
const cors = require("cors"); // Import the cors package

const app = express();
const port = 8000;

mongoose.connect(
  "mongodb+srv://asifaminisonline:wNVWMZ6VOQ3QIe8c@cluster0.qo0jfio.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors()); // Enable CORS for all origins during development

app.use(bodyParser.json());

app.use("/locations", locationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
