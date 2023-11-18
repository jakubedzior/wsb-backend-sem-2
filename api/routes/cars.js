const Car = require('../models/car');

const express = require("express");
const router = express.Router();

// Read GET localhost:3000/cars
router.get("/", (req, res, next) => {
    Car.find()
        .then(result => {
            res.status(200).json({
                message: "Lista wszystkich samochodów",
                info: result,
            });
        })
        .catch(err => res.status(500).json(err));
});

// Create POST localhost:3000/cars
router.post("/", (req, res, next) => {
    const car = new Car({
        marka: req.body.marka,
        model: req.body.model,
        rok: req.body.rok,
    });
    car.save()
        .then(result => {
            res.status(201).json({
                message: "Dodanie nowego samochodu",
                info: result,
            });
        })
        .catch(err => res.status(500).json(err));
});

// Read GET localhost:3000/cars
router.get("/:carId", (req, res, next) => {
    const id = req.params.carId;
    Car.findById(id)
        .then(result => {
            res.status(200).json({
                message: "Szczegóły samochodu o numerze " + id,
                info: result,
            });
        })
        .catch(err => res.status(500).json(err));
});

// Update PUT localhost:3000/cars/<id>
router.put("/:carId", (req, res, next) => {
    const id = req.params.carId;
    Car.findByIdAndUpdate(id, {
        marka: req.body.marka,
        model: req.body.model,
        rok: req.body.rok,
    })
        .then(() => {
            res.status(200).json({
                message: "Zmiana danych samochodu o numerze " + id,
            });
        })
        .catch(err => res.status(500).json(err));
});

// Delete DELETE localhost:3000/cars/<id>
router.delete("/:carId", (req, res, next) => {
    const id = req.params.carId;
    Car.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                message: "Usunięcie samochodu o numerze " + id,
            });
        })
        .catch(err => res.status(500).json(err));
});


module.exports = router;
