const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/tourdb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Routes
const tourRoutes = require("./routes/tourroutes");
app.use("/api/tours", tourRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Tour Management System");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});