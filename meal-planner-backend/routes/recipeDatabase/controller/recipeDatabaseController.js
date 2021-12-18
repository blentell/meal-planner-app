const { isAlpha, isInt } = require("validator");

const Recipes = require("../model/RecipeDatabase");
const User = require("../../users/model/User");
const errorHandler = require("../../utils/errorHandler/errorHandler");

async function getAllRecipes(req, res) {
	try {
		const decodedData = res.locals.decodedData;
	
		let foundUser = await User.findOne({ email: decodedData.email }).populate(
			"recipeList",
			"-recipeOwner -_v"
		);
		
		let foundRecipes = await Recipe.find({ recipeOwner: foundUser._id });
	
		res.json({ message: "success", payload: foundRecipes });
	} catch (e) {
		console.log(e);
	}
}

async function getRecipe(req, res) {
	try {
		const decodedData = res.locals.decodedData;
		let foundUser = await User.findOne({ email: decodedData.email }).populate(
			"recipeList",
			"-recipeOwner -_v"
		);
	
		let userRecipeArray = foundUser.recipeList;
		let filterArray = userRecipeArray.filter(
			(item) => item._id.toString() !== req.params.id
		);
		
		foundUser.recipeList = filterArray;
		await foundUser.save();

		let recipeVariable = req.params.recipeTitle;

		let foundRecipe = await Recipes.find({
			recipeOwner: foundUser._id,
			recipeTitle: {
				$regex: new RegExp(recipeVariable, "i"),
			},
		});
		
		res.json({
			message: "success",
			payload: foundRecipe,
		});
	} catch (e) {
		console.log("error: ", e);
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
	
		let createdRecipe = new Recipes({
			strMeal: req.body.strMeal,
			strMealThumb: req.body.strMealThumb,
			strArea: req.body.strArea,
			strCategory: req.body.strCategory,
			strIngredient1: req.body.strIngredient1,
			strIngredient2: req.body.strIngredient2,
			strIngredient3: req.body.strIngredient3,
			strIngredient4: req.body.strIngredient4,
			strIngredient5: req.body.strIngredient5,
			strIngredient6: req.body.strIngredient6,
			strIngredient7: req.body.strIngredient7,
			strIngredient8: req.body.strIngredient8,
			strIngredient9: req.body.strIngredient9,
			strIngredient10: req.body.strIngredient10,
			strIngredient11: req.body.strIngredient11,
			strIngredient12: req.body.strIngredient12,
			strIngredient13: req.body.strIngredient13,
			strIngredient14: req.body.strIngredient14,
			strIngredient15: req.body.strIngredient15,
			strIngredient16: req.body.strIngredient16,
			strIngredient17: req.body.strIngredient17,
			strIngredient18: req.body.strIngredient18,
			strIngredient19: req.body.strIngredient19,
			strIngredient20: req.body.strIngredient20,
			strMeasure1: req.body.strMeasure1,
			strMeasure2: req.body.strMeasure2,
			strMeasure3: req.body.strMeasure3,
			strMeasure4: req.body.strMeasure4,
			strMeasure5: req.body.strMeasure5,
			strMeasure6: req.body.strMeasure6,
			strMeasure7: req.body.strMeasure7,
			strMeasure8: req.body.strMeasure8,
			strMeasure9: req.body.strMeasure9,
			strMeasure10: req.body.strMeasure10,
			strMeasure11: req.body.strMeasure11,
			strMeasure12: req.body.strMeasure12,
			strMeasure13: req.body.strMeasure13,
			strMeasure14: req.body.strMeasure14,
			strMeasure15: req.body.strMeasure15,
			strMeasure16: req.body.strMeasure16,
			strMeasure17: req.body.strMeasure17,
			strMeasure18: req.body.strMeasure18,
			strMeasure19: req.body.strMeasure19,
			strMeasure20: req.body.strMeasure20,
			strSource: req.body.strSource,
			strYoutube: req.body.strYoutube,
			strInstructions: req.body.strInstructions,
			mealOwner: foundUser._id,
		});

		let savedRecipe = await createdRecipe.save();

		foundUser.recipeList.push(savedRecipe._id);

		await foundUser.save();
		
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
