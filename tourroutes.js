const express = require("express");

const router = express.Router();

const Tour = require("../models/tour");


// CREATE
router.post("/", async (req, res) => {

    try {

        const tour = new Tour(req.body);

        await tour.save();

        res.status(201).json({
            message: "Tour Added Successfully",
            tour
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// READ ALL
router.get("/", async (req, res) => {

    try {

        const tours = await Tour.find();

        res.json(tours);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// READ BY ID
router.get("/:id", async (req, res) => {

    try {

        const tour = await Tour.findById(req.params.id);

        if (!tour) {
            return res.status(404).json({
                message: "Tour Not Found"
            });
        }

        res.json(tour);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// UPDATE
router.put("/:id", async (req, res) => {

    try {

        const tour = await Tour.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!tour) {
            return res.status(404).json({
                message: "Tour Not Found"
            });
        }

        res.json({
            message: "Tour Updated Successfully",
            tour
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// DELETE
router.delete("/:id", async (req, res) => {

    try {

        const tour = await Tour.findByIdAndDelete(req.params.id);

        if (!tour) {
            return res.status(404).json({
                message: "Tour Not Found"
            });
        }

        res.json({
            message: "Tour Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

module.exports = router;