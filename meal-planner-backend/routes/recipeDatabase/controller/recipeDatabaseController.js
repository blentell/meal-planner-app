const { isAlpha, isInt } = require("validator");

const Recipe = require("../model/RecipeDatabase");
const User = require("../../users/model/User");
const errorHandler = require("../../utils/errorHandler/errorHandler");

async function getAllRecipes(req, res) {
	try {
		const decodedData = res.locals.decodedData;
		console.log(decodedData);
		let foundUser = await User.findOne({ email: decodedData.email }).populate(
			"recipeList",
			"-recipeOwner -_v"
		);
		console.log("foundUser: ", foundUser);
		let foundRecipes = await Recipe.find({ recipeOwner: foundUser._id });
		console.log("foundRecipes: ", foundRecipes);
		res.json({ message: "success", payload: foundRecipes });
	} catch (e) {
		console.log(e);
	}
}

async function getRecipe(req, res) {
	try {
		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email });
		let userRecipeArray = foundUser.recipeList;
		let filterArray = userRecipeArray.filter(
			(item) => item._id.toString() !== req.params.id
		);

		foundUser.recipeList = filterArray;
		await foundUser.save();
		let foundRecipe = await Recipes.findById(req.params.id);

		res.json({
			message: "success",
			payload: foundRecipe,
		});
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}

async function addRecipe(req, res) {
	try {

		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email }).populate(
			"recipeList",
			"-recipeOwner -_v"
		);;
		console.log("req.body: ", req.body);
		let createdRecipe = new Recipe({
			recipeTitle: req.body.recipeTitle,
			recipePicture: req.body.recipePicture,
			recipeDate: req.body.recipeDate,
			recipeArea: req.body.recipeArea,
			recipeCategory: req.body.recipeCategory,
			recipeIngredient1: req.body.recipeIngredient1,
			recipeIngredient2: req.body.recipeIngredient2,
			recipeIngredient3: req.body.recipeIngredient3,
			recipeIngredient4: req.body.recipeIngredient4,
			recipeIngredient5: req.body.recipeIngredient5,
			recipeIngredient6: req.body.recipeIngredient6,
			recipeIngredient7: req.body.recipeIngredient7,
			recipeIngredient8: req.body.recipeIngredient8,
			recipeIngredient9: req.body.recipeIngredient9,
			recipeIngredient10: req.body.recipeIngredient10,
			recipeIngredient11: req.body.recipeIngredient11,
			recipeIngredient12: req.body.recipeIngredient12,
			recipeIngredient13: req.body.recipeIngredient13,
			recipeIngredient14: req.body.recipeIngredient14,
			recipeIngredient15: req.body.recipeIngredient15,
			recipeIngredient16: req.body.recipeIngredient16,
			recipeIngredient17: req.body.recipeIngredient17,
			recipeIngredient18: req.body.recipeIngredient18,
			recipeIngredient19: req.body.recipeIngredient19,
			recipeIngredient20: req.body.recipeIngredient20,
			recipeMeasure1: req.body.recipeMeasure1,
			recipeMeasure2: req.body.recipeMeasure2,
			recipeMeasure3: req.body.recipeMeasure3,
			recipeMeasure4: req.body.recipeMeasure4,
			recipeMeasure5: req.body.recipeMeasure5,
			recipeMeasure6: req.body.recipeMeasure6,
			recipeMeasure7: req.body.recipeMeasure7,
			recipeMeasure8: req.body.recipeMeasure8,
			recipeMeasure9: req.body.recipeMeasure9,
			recipeMeasure10: req.body.recipeMeasure10,
			recipeMeasure11: req.body.recipeMeasure11,
			recipeMeasure12: req.body.recipeMeasure12,
			recipeMeasure13: req.body.recipeMeasure13,
			recipeMeasure14: req.body.recipeMeasure14,
			recipeMeasure15: req.body.recipeMeasure15,
			recipeMeasure16: req.body.recipeMeasure16,
			recipeMeasure17: req.body.recipeMeasure17,
			recipeMeasure18: req.body.recipeMeasure18,
			recipeMeasure19: req.body.recipeMeasure19,
			recipeMeasure20: req.body.recipeMeasure20,
			recipeSource: req.body.recipeSource,
			recipeYoutube: req.body.recipeYoutube,
			recipeInstructions: req.body.recipeInstructions,
			recipeOwner: foundUser._id,
		});

		let savedRecipe = await createdRecipe.save();

		foundUser.recipeList.push(savedRecipe._id);

		await foundUser.save();
		console.log("savedRecipe: ", savedRecipe);
		res.json({ message: "success", payload: savedRecipe });
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}
async function deleteRecipe(req, res) {
	try {
		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email });
		let userRecipeArray = foundUser.recipeList;
		let filterArray = userRecipeArray.filter(
			(item) => item._id.toString() !== req.params.id
		);

		foundUser.recipeList = filterArray;
		await foundUser.save();
		let deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);

		res.json({
			message: "success",
			payload: deletedRecipe,
		});
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}
async function updateRecipe(req, res) {
	try {
		let foundRecipe = await Recipe.findById(req.params.id);

		if (!foundRecipe) {
			res.status(404).json({ message: "failure", error: "Recipe not found" });
		} else {
			let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			});

			res.json({ message: "success", payload: updatedRecipe });
		}
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}

module.exports = {
	getAllRecipes,
	getRecipe,
	addRecipe,
	deleteRecipe,
	updateRecipe,
};
