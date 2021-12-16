var express = require("express");
var router = express.Router();
const { isAlpha, isInt } = require("validator");
// bringing in the required utilities
var { jwtMiddleware } = require("../users/lib/authMiddleware");

const {
	getAllRecipes,
	getRecipe,
	addRecipe,
	deleteRecipe,
	updateRecipe,
} = require("./controller/recipeDatabaseController");

router.post("/add-recipe", jwtMiddleware, addRecipe);

router.get("/", jwtMiddleware, getAllRecipes);

router.get("/get-recipe/:recipeTitle", jwtMiddleware, getRecipe);

router.put("/update-recipe/:id", jwtMiddleware, updateRecipe);

router.delete("/delete-recipe/:id", jwtMiddleware, deleteRecipe);

module.exports = router;
