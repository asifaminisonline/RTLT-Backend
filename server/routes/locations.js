const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.post("/", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    // Create a new location document and save it to the database
    const newLocation = new Location({
      latitude,
      longitude,
      timestamp: new Date(),
    });

    await newLocation.save();
    res.status(201).json({ message: "Location saved successfully." });
  } catch (error) {
    console.error("Error saving location:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
