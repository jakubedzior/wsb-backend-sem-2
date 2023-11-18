require("dotenv").config()

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("tiny"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const carRoutes = require("./api/routes/cars");
app.use("/cars", carRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});


module.exports = app;
