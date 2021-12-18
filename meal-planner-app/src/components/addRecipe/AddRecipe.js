import React, { useContext } from "react";
import { NewRecipeContext } from "../../context/mealContext";
import "./AddRecipe.css";

function AddRecipe() {
	const {
		strMeasure1a,
		strMeasure1b,
		strMeasure2a,
		strMeasure2b,
		strMeasure3a,
		strMeasure3b,
		strMeasure4a,
		strMeasure4b,
		strMeasure5a,
		strMeasure5b,
		strMeasure6a,
		strMeasure6b,
		strMeasure7a,
		strMeasure7b,
		strMeasure8a,
		strMeasure8b,
		strMeasure9a,
		strMeasure9b,
		strMeasure10a,
		strMeasure10b,
		strMeasure11a,
		strMeasure11b,
		strMeasure12a,
		strMeasure12b,
		strMeasure13a,
		strMeasure13b,
		strMeasure14a,
		strMeasure14b,
		strMeasure15a,
		strMeasure15b,
		strMeasure16a,
		strMeasure16b,
		strMeasure17a,
		strMeasure17b,
		strMeasure18a,
		strMeasure18b,
		strMeasure19a,
		strMeasure19b,
		strMeasure20a,
		strMeasure20b,
		setStrMeal,
		setStrMealThumb,
		setStrArea,
		setStrCategory,
		setStrIngredient1,
		setStrIngredient2,
		setStrIngredient3,
		setStrIngredient4,
		setStrIngredient5,
		setStrIngredient6,
		setStrIngredient7,
		setStrIngredient8,
		setStrIngredient9,
		setStrIngredient10,
		setStrIngredient11,
		setStrIngredient12,
		setStrIngredient13,
		setStrIngredient14,
		setStrIngredient15,
		setStrIngredient16,
		setStrIngredient17,
		setStrIngredient18,
		setStrIngredient19,
		setStrIngredient20,
		setStrSource,
		setStrYoutube,
		setStrInstructions,
		quantityList,
		QuantityOptions,
		amountList,
		AmountOptions,
		addNewRecipe,
changeMeasure1a,
changeMeasure1b,
changeMeasure2a,
changeMeasure2b,
changeMeasure3a,
changeMeasure3b,
changeMeasure4a,
changeMeasure4b,
changeMeasure5a,
changeMeasure5b,
changeMeasure6a,
changeMeasure6b,
changeMeasure7a,
changeMeasure7b,
changeMeasure8a,
changeMeasure8b,
changeMeasure9a,
changeMeasure9b,
changeMeasure10a,
changeMeasure10b,
changeMeasure11a,
changeMeasure11b,
changeMeasure12a,
changeMeasure12b,
changeMeasure13a,
changeMeasure13b,
changeMeasure14a,
changeMeasure14b,
changeMeasure15a,
changeMeasure15b,
changeMeasure16a,
changeMeasure16b,
changeMeasure17a,
changeMeasure17b,
changeMeasure18a,
changeMeasure18b,
changeMeasure19a,
changeMeasure19b,
changeMeasure20a,
changeMeasure20b} = useContext(NewRecipeContext)


	return (
		<div className="newRecipe">
			<h4 className="">Add your own recipe (Limit 20 ingredients)</h4>
			<div className="title-img-type">
				<input
					type="text"
					className="recipeName"
					placeholder="Recipe Name"
					onChange={(event) => setStrMeal(event.target.value)}
				></input>
				<input
					type="text"
					className="imageLocation"
					placeholder="image location (ie https://myimage.com)"
					onChange={(event) => setStrMealThumb(event.target.value)}
				></input>
			</div>
			<div className="type-area">
				<input
					type="text"
					className="mealType"
					placeholder="Meal Type (chicken, beef, lunch, dinner, etc)"
					onChange={(event) => setStrCategory(event.target.value)}
				></input>
				<input
					type="text"
					className="mealArea"
					placeholder="Meal Area (what country its from)"
					onChange={(event) => setStrArea(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure1a}
					onChange={(e) => changeMeasure1a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure1b}
					onChange={(e) => changeMeasure1b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #1"
					onChange={(event) => setStrIngredient1(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure2a}
					onChange={(e) => changeMeasure2a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure2b}
					onChange={(e) => changeMeasure2b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #2"
					onChange={(event) => setStrIngredient2(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure3a}
					onChange={(e) => changeMeasure3a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure3b}
					onChange={(e) => changeMeasure3b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #3"
					onChange={(event) => setStrIngredient3(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure4a}
					onChange={(e) => changeMeasure4a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure4b}
					onChange={(e) => changeMeasure4b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #4"
					onChange={(event) => setStrIngredient4(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure5a}
					onChange={(e) => changeMeasure5a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure5b}
					onChange={(e) => changeMeasure5b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #5"
					onChange={(event) => setStrIngredient5(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure6a}
					onChange={(e) => changeMeasure6a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure6b}
					onChange={(e) => changeMeasure6b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #6"
					onChange={(event) => setStrIngredient6(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure7a}
					onChange={(e) => changeMeasure7a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure7b}
					onChange={(e) => changeMeasure7b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #7"
					onChange={(event) => setStrIngredient7(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure8a}
					onChange={(e) => changeMeasure8a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure8b}
					onChange={(e) => changeMeasure8b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #8"
					onChange={(event) => setStrIngredient8(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure9a}
					onChange={(e) => changeMeasure9a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure9b}
					onChange={(e) => changeMeasure9b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #9"
					onChange={(event) => setStrIngredient9(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure10a}
					onChange={(e) => changeMeasure10a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure10b}
					onChange={(e) => changeMeasure10b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #10"
					onChange={(event) => setStrIngredient10(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure11a}
					onChange={(e) => changeMeasure11a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure11b}
					onChange={(e) => changeMeasure11b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #11"
					onChange={(event) => setStrIngredient11(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure12a}
					onChange={(e) => changeMeasure12a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure12b}
					onChange={(e) => changeMeasure12b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #12"
					onChange={(event) => setStrIngredient12(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure13a}
					onChange={(e) => changeMeasure13a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure13b}
					onChange={(e) => changeMeasure13b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #13"
					onChange={(event) => setStrIngredient13(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure14a}
					onChange={(e) => changeMeasure14a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure14b}
					onChange={(e) => changeMeasure14b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #14"
					onChange={(event) => setStrIngredient14(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure15a}
					onChange={(e) => changeMeasure15a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure15b}
					onChange={(e) => changeMeasure15b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #15"
					onChange={(event) => setStrIngredient15(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure16a}
					onChange={(e) => changeMeasure16a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure16b}
					onChange={(e) => changeMeasure16b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #16"
					onChange={(event) => setStrIngredient16(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure17a}
					onChange={(e) => changeMeasure17a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure17b}
					onChange={(e) => changeMeasure17b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #17"
					onChange={(event) => setStrIngredient17(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure18a}
					onChange={(e) => changeMeasure18a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure18b}
					onChange={(e) => changeMeasure18b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #18"
					onChange={(event) => setStrIngredient18(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure19a}
					onChange={(e) => changeMeasure19a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure19b}
					onChange={(e) => changeMeasure19b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #19"
					onChange={(event) => setStrIngredient19(event.target.value)}
				></input>
			</div>
			<div className="quantity-ingredients">
				<select
					className="quantity"
					value={strMeasure20a}
					onChange={(e) => changeMeasure20a(e.target.value)}
				>
					<QuantityOptions options={quantityList} />
				</select>
				<select
					className="amount"
					value={strMeasure20b}
					onChange={(e) => changeMeasure20b(e.target.value)}
				>
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient #20"
					onChange={(event) => setStrIngredient20(event.target.value)}
				></input>
			</div>
			<div>
				<input
					type="text"
					className="source"
					placeholder="Source"
					onChange={(event) => setStrSource(event.target.value)}
				></input>
			</div>
			<div>
				<input
					type="text"
					className="youtube"
					placeholder="Youtube"
					onChange={(event) => setStrYoutube(event.target.value)}
				></input>
			</div>
			<input
				type="text"
				className="instructionInput"
				placeholder="Instructions"
				onChange={(event) => setStrInstructions(event.target.value)}
			></input>
			<button className="recipeSubmit" onClick={addNewRecipe}>
				Submit Recipe
			</button>
		</div>
	);
}

export default AddRecipe;
