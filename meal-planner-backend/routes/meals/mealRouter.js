var express = require("express");
var router = express.Router();
const { isAlpha, isInt } = require("validator");
// bringing in the required utilities
var { jwtMiddleware } = require("../users/lib/authMiddleware");

const {getAllMeals, getMeal, addMeals, deleteMeals, updateMeals } = require('./controller/mealController')

router.post("/add-meal", jwtMiddleware, addMeals);

router.get("/", jwtMiddleware, getAllMeals);

router.get("/get-meal/:id", jwtMiddleware, getMeal);

router.put("/update-meal/:id", jwtMiddleware, updateMeals);

router.delete("/delete-meal/:id", jwtMiddleware, deleteMeals);


module.exports = router;

