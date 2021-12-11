const { isAlpha, isInt } = require("validator");

const Meals = require("../model/Meals");
const User = require("../../users/model/User");
const errorHandler = require("../../utils/errorHandler/errorHandler");

async function getAllMeals(req, res) {
	try {
		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email }).populate(
			"mealList"
		);
		
		let foundMeals = await Meals.find({user: foundUser._id})
res.json({ message: "success", payload: foundMeals });
	} catch (e) {
		console.log(e)
	}	
}

async function getMeal(req, res) {
	try {
		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email });
		let userMealArray = foundUser.mealList;
		let filterArray = userMealArray.filter(
			(item) => item._id.toString() !== req.params.id
		);

		foundUser.mealList = filterArray;
		await foundUser.save();
		let foundMeal = await Meals.findById(req.params.id);

		res.json({
			message: "success",
			payload: foundMeal,
		});
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}

async function addMeals(req, res) {
	try {
		// const { mealTitle, mealPicture, mealDate } = req.body;

		const decodedData = res.locals.decodedData;
		
		let foundUser = await User.findOne({ email: decodedData.email });
		console.log("req.body: ", req.body);
		let createdMeal = new Meals({
			mealTitle: req.body.mealTitle,
			mealPicture: req.body.mealPicture,
			mealDate: req.body.mealDate,
			mealArea: req.body.mealArea,
			mealCategory: req.body.mealCategory,
			mealIngredient1: req.body.mealIngredient1,
			mealIngredient2: req.body.mealIngredient2,
			mealIngredient3: req.body.mealIngredient3,
			mealIngredient4: req.body.mealIngredient4,
			mealIngredient5: req.body.mealIngredient5,
			mealIngredient6: req.body.mealIngredient6,
			mealIngredient7: req.body.mealIngredient7,
			mealIngredient8: req.body.mealIngredient8,
			mealIngredient9: req.body.mealIngredient9,
			mealIngredient10: req.body.mealIngredient10,
			mealIngredient11: req.body.mealIngredient11,
			mealIngredient12: req.body.mealIngredient12,
			mealIngredient13: req.body.mealIngredient13,
			mealIngredient14: req.body.mealIngredient14,
			mealIngredient15: req.body.mealIngredient15,
			mealIngredient16: req.body.mealIngredient16,
			mealIngredient17: req.body.mealIngredient17,
			mealIngredient18: req.body.mealIngredient18,
			mealIngredient19: req.body.mealIngredient19,
			mealIngredient20: req.body.mealIngredient20,
			mealMeasure1: req.body.mealMeasure1,
			mealMeasure2: req.body.mealMeasure2,
			mealMeasure3: req.body.mealMeasure3,
			mealMeasure4: req.body.mealMeasure4,
			mealMeasure5: req.body.mealMeasure5,
			mealMeasure6: req.body.mealMeasure6,
			mealMeasure7: req.body.mealMeasure7,
			mealMeasure8: req.body.mealMeasure8,
			mealMeasure9: req.body.mealMeasure9,
			mealMeasure10: req.body.mealMeasure10,
			mealMeasure11: req.body.mealMeasure11,
			mealMeasure12: req.body.mealMeasure12,
			mealMeasure13: req.body.mealMeasure13,
			mealMeasure14: req.body.mealMeasure14,
			mealMeasure15: req.body.mealMeasure15,
			mealMeasure16: req.body.mealMeasure16,
			mealMeasure17: req.body.mealMeasure17,
			mealMeasure18: req.body.mealMeasure18,
			mealMeasure19: req.body.mealMeasure19,
			mealMeasure20: req.body.mealMeasure20,
			mealSource: req.body.mealSource,
			mealYoutube: req.body.mealYoutube,
			mealInstructions: req.body.mealInstructions,
			mealOwner: foundUser._id,
		});
		
		let savedMeal = await createdMeal.save();

		foundUser.mealList.push(savedMeal._id);

		await foundUser.save();
		console.log("savedMeal: ", savedMeal);
		res.json({ message: "success", payload: savedMeal });
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}
async function deleteMeals(req, res) {
	try {
		const decodedData = res.locals.decodedData;

		let foundUser = await User.findOne({ email: decodedData.email });
		let userMealArray = foundUser.mealList;
		let filterArray = userMealArray.filter(
			(item) => item._id.toString() !== req.params.id
		);

		foundUser.mealList = filterArray;
		await foundUser.save();
		let deletedMeal = await Meals.findByIdAndRemove(req.params.id);
	
		res.json({
		message: "success",
		payload: deletedMeal,
	});
		
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}
async function updateMeals(req, res) {
	try {
		let foundMeal = await Meals.findById(req.params.id);

		if (!foundMeal) {
			res.status(404).json({ message: "failure", error: "Meal not found" });
		} else {
			let updatedMeal = await Meals.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);

			res.json({ message: "success", payload: updatedMeal });
		}
	} catch (e) {
		res.status(500).json(errorHandler(e));
	}
}

module.exports = {
	getAllMeals,
	getMeal,
	addMeals,
	deleteMeals,
	updateMeals,
};
