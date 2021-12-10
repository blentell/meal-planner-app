const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema(
	{
		mealTitle: {
			type: String,
		},
		mealPicture: {
			type: String,
		},
		mealDate: {
			type: String,
		},
		mealArea: {
			type: String,
		},
		mealCategory: {
			type: String,
		},
		mealIngredient1: {
			type: String,
		},
		mealIngredient2: {
			type: String,
		},
		mealIngredient3: {
			type: String,
		},
		mealIngredient4: {
			type: String,
		},
		mealIngredient5: {
			type: String,
		},
		mealIngredient6: {
			type: String,
		},
		mealIngredient7: {
			type: String,
		},
		mealIngredient8: {
			type: String,
		},
		mealIngredient9: {
			type: String,
		},
		mealIngredient10: {
			type: String,
		},
		mealIngredient11: {
			type: String,
		},
		mealIngredient12: {
			type: String,
		},
		mealIngredient13: {
			type: String,
		},
		mealIngredient14: {
			type: String,
		},
		mealIngredient15: {
			type: String,
		},
		mealIngredient16: {
			type: String,
		},
		mealIngredient17: {
			type: String,
		},
		mealIngredient18: {
			type: String,
		},
		mealIngredient19: {
			type: String,
		},
		mealIngredient20: {
			type: String,
		},
		mealMeasure1: {
			type: String,
		},
		mealMeasure2: {
			type: String,
		},
		mealMeasure3: {
			type: String,
		},
		mealMeasure4: {
			type: String,
		},
		mealMeasure5: {
			type: String,
		},
		mealMeasure6: {
			type: String,
		},
		mealMeasure7: {
			type: String,
		},
		mealMeasure8: {
			type: String,
		},
		mealMeasure9: {
			type: String,
		},
		mealMeasure10: {
			type: String,
		},
		mealMeasure11: {
			type: String,
		},
		mealMeasure12: {
			type: String,
		},
		mealMeasure13: {
			type: String,
		},
		mealMeasure14: {
			type: String,
		},
		mealMeasure15: {
			type: String,
		},
		mealMeasure16: {
			type: String,
		},
		mealMeasure17: {
			type: String,
		},
		mealMeasure18: {
			type: String,
		},
		mealMeasure19: {
			type: String,
		},
		mealMeasure20: {
			type: String,
		},
		mealSource: {
			type: String,
		},
		mealYoutube: {
			type: String,
		},
		mealOwner: {
			type: mongoose.Schema.ObjectId,
			ref: "user",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("meal", MealSchema);
