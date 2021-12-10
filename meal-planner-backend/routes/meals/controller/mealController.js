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
async function addMeals(req, res) {
	try {
		// const { mealTitle, mealPicture, mealDate } = req.body;

		const decodedData = res.locals.decodedData;
		
		let foundUser = await User.findOne({ email: decodedData.email });
		console.log(req.body);
		let createdMeal = new Meals({
			mealTitle: req.body.mealTitle,
			mealPicture: req.body.mealPicture,
			mealDate: req.body.mealDate,
			mealArea: req.body.mealArea,
			mealCategory: req.body.mealCategory,
			mealIngredient1: req.body.strIngredient1,
			mealIngredient2: req.body.strIngredient2,
			mealIngredient3: req.body.strIngredient3,
			mealIngredient4: req.body.strIngredient4,
			mealIngredient5: req.body.strIngredient5,
			mealIngredient6: req.body.strIngredient6,
			mealIngredient7: req.body.strIngredient7,
			mealIngredient8: req.body.strIngredient8,
			mealIngredient9: req.body.strIngredient9,
			mealIngredient10: req.body.strIngredient10,
			mealIngredient11: req.body.strIngredient11,
			mealIngredient12: req.body.strIngredient12,
			mealIngredient13: req.body.strIngredient13,
			mealIngredient14: req.body.strIngredient14,
			mealIngredient15: req.body.strIngredient15,
			mealIngredient16: req.body.strIngredient16,
			mealIngredient17: req.body.strIngredient17,
			mealIngredient18: req.body.strIngredient18,
			mealIngredient19: req.body.strIngredient19,
			mealIngredient20: req.body.strIngredient20,
			mealMeasure1: req.body.strMeasure1,
			mealMeasure2: req.body.strMeasure2,
			mealMeasure3: req.body.strMeasure3,
			mealMeasure4: req.body.strMeasure4,
			mealMeasure5: req.body.strMeasure5,
			mealMeasure6: req.body.strMeasure6,
			mealMeasure7: req.body.strMeasure7,
			mealMeasure8: req.body.strMeasure8,
			mealMeasure9: req.body.strMeasure9,
			mealMeasure10: req.body.strMeasure10,
			mealMeasure11: req.body.strMeasure11,
			mealMeasure12: req.body.strMeasure12,
			mealMeasure13: req.body.strMeasure13,
			mealMeasure14: req.body.strMeasure14,
			mealMeasure15: req.body.strMeasure15,
			mealMeasure16: req.body.strMeasure16,
			mealMeasure17: req.body.strMeasure17,
			mealMeasure18: req.body.strMeasure18,
			mealMeasure19: req.body.strMeasure19,
			mealMeasure20: req.body.strMeasure20,
			mealSource: req.body.strSource,
			mealYoutube: req.body.strYoutube,
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
	addMeals,
	deleteMeals,
	updateMeals,
};
