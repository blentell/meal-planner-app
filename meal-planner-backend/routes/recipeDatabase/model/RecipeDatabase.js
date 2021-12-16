const mongoose = require("mongoose");

const RecipeDatabaseSchema = new mongoose.Schema(
	{
		recipeTitle: {
			type: String,
		},
		recipePicture: {
			type: String,
		},
		recipeArea: {
			type: String,
		},
		recipeCategory: {
			type: String,
		},
		recipeIngredient1: {
			type: String,
		},
		recipeIngredient2: {
			type: String,
		},
		recipeIngredient3: {
			type: String,
		},
		recipeIngredient4: {
			type: String,
		},
		recipeIngredient5: {
			type: String,
		},
		recipeIngredient6: {
			type: String,
		},
		recipeIngredient7: {
			type: String,
		},
		recipeIngredient8: {
			type: String,
		},
		recipeIngredient9: {
			type: String,
		},
		recipeIngredient10: {
			type: String,
		},
		recipeIngredient11: {
			type: String,
		},
		recipeIngredient12: {
			type: String,
		},
		recipeIngredient13: {
			type: String,
		},
		recipeIngredient14: {
			type: String,
		},
		recipeIngredient15: {
			type: String,
		},
		recipeIngredient16: {
			type: String,
		},
		recipeIngredient17: {
			type: String,
		},
		recipeIngredient18: {
			type: String,
		},
		recipeIngredient19: {
			type: String,
		},
		recipeIngredient20: {
			type: String,
		},
		recipeMeasure1: {
			type: String,
		},
		recipeMeasure2: {
			type: String,
		},
		recipeMeasure3: {
			type: String,
		},
		recipeMeasure4: {
			type: String,
		},
		recipeMeasure5: {
			type: String,
		},
		recipeMeasure6: {
			type: String,
		},
		recipeMeasure7: {
			type: String,
		},
		recipeMeasure8: {
			type: String,
		},
		recipeMeasure9: {
			type: String,
		},
		recipeMeasure10: {
			type: String,
		},
		recipeMeasure11: {
			type: String,
		},
		recipeMeasure12: {
			type: String,
		},
		recipeMeasure13: {
			type: String,
		},
		recipeMeasure14: {
			type: String,
		},
		recipeMeasure15: {
			type: String,
		},
		recipeMeasure16: {
			type: String,
		},
		recipeMeasure17: {
			type: String,
		},
		recipeMeasure18: {
			type: String,
		},
		recipeMeasure19: {
			type: String,
		},
		recipeMeasure20: {
			type: String,
		},
		recipeSource: {
			type: String,
		},
		recipeYoutube: {
			type: String,
		},
		recipeInstructions: {
			type: String,
		},
		recipeOwner: {
			type: mongoose.Schema.ObjectId,
			ref: "user",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("recipeDatabase", RecipeDatabaseSchema);
