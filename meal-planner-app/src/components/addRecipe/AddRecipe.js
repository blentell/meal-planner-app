import React, { useState, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../../context/mealContext";
import "./AddRecipe.css";

function AddRecipe() {
	const [newRecipe, setNewRecipe] = useState([])
	const [strTitle, setStrTitle] = useState("");
	const [strThumb, setStrThumb] = useState("");
	const [strArea, setStrArea] = useState("");
	const [strCategory, setStrCategory] = useState("");
	const [strIngredient1, setStrIngredient1] = useState("");
	const [strIngredient2, setStrIngredient2] = useState("");
	const [strIngredient3, setStrIngredient3] = useState("");
	const [strIngredient4, setStrIngredient4] = useState("");
	const [strIngredient5, setStrIngredient5] = useState("");
	const [strIngredient6, setStrIngredient6] = useState("");
	const [strIngredient7, setStrIngredient7] = useState("");
	const [strIngredient8, setStrIngredient8] = useState("");
	const [strIngredient9, setStrIngredient9] = useState("");
	const [strIngredient10, setStrIngredient10] = useState("");
	const [strIngredient11, setStrIngredient11] = useState("");
	const [strIngredient12, setStrIngredient12] = useState("");
	const [strIngredient13, setStrIngredient13] = useState("");
	const [strIngredient14, setStrIngredient14] = useState("");
	const [strIngredient15, setStrIngredient15] = useState("");
	const [strIngredient16, setStrIngredient16] = useState("");
	const [strIngredient17, setStrIngredient17] = useState("");
	const [strIngredient18, setStrIngredient18] = useState("");
	const [strIngredient19, setStrIngredient19] = useState("");
	const [strIngredient20, setStrIngredient20] = useState("");
const [strMeasure1, setStrMeasure1] = useState("");
const [strMeasure2, setStrMeasure2] = useState("");
const [strMeasure3, setStrMeasure3] = useState("");
const [strMeasure4, setStrMeasure4] = useState("");
const [strMeasure5, setStrMeasure5] = useState("");
const [strMeasure6, setStrMeasure6] = useState("");
const [strMeasure7, setStrMeasure7] = useState("");
const [strMeasure8, setStrMeasure8] = useState("");
const [strMeasure9, setStrMeasure9] = useState("");
const [strMeasure10, setStrMeasure10] = useState("");
const [strMeasure11, setStrMeasure11] = useState("");
const [strMeasure12, setStrMeasure12] = useState("");
const [strMeasure13, setStrMeasure13] = useState("");
const [strMeasure14, setStrMeasure14] = useState("");
const [strMeasure15, setStrMeasure15] = useState("");
const [strMeasure16, setStrMeasure16] = useState("");
const [strMeasure17, setStrMeasure17] = useState("");
const [strMeasure18, setStrMeasure18] = useState("");
const [strMeasure19, setStrMeasure19] = useState("");
const [strMeasure20, setStrMeasure20] = useState("");
const [strSource, setStrSource] = useState("");
const [strYoutube, setStrYoutube] = useState("");
const [strInstructions, setStrInstructions] = useState("");



	const quantityList = [
		{
			id: 1,
			value: "",
		},
		{
			id: 2,
			value: "1/8",
		},
		{
			id: 3,
			value: "1/4",
		},
		{
			id: 4,
			value: "1/2",
		},
		{
			id: 2,
			value: "2/3",
		},
		{
			id: 3,
			value: "3/4",
		},
		{
			id: 4,
			value: "1",
		},
		{
			id: 2,
			value: "2",
		},
		{
			id: 3,
			value: "3",
		},
		{
			id: 4,
			value: "4",
		},
		{
			id: 4,
			value: "5",
		},
		{
			id: 2,
			value: "6",
		},
		{
			id: 3,
			value: "7",
		},
		{
			id: 4,
			value: "8",
		},
		{
			id: 4,
			value: "9",
		},
		{
			id: 2,
			value: "10",
		},
		{
			id: 3,
			value: "11",
		},
		{
			id: 4,
			value: "12",
		},
		{
			id: 4,
			value: "13",
		},
		{
			id: 2,
			value: "14",
		},
		{
			id: 3,
			value: "15",
		},
		{
			id: 4,
			value: "16",
		},
		{
			id: 4,
			value: "17",
		},
		{
			id: 2,
			value: "18",
		},
		{
			id: 3,
			value: "19",
		},
		{
			id: 4,
			value: "20",
		},
		{
			id: 4,
			value: "21",
		},
		{
			id: 2,
			value: "22",
		},
		{
			id: 3,
			value: "23",
		},
		{
			id: 4,
			value: "24",
		},
		{
			id: 4,
			value: "25",
		},
		{
			id: 2,
			value: "26",
		},
		{
			id: 3,
			value: "27",
		},
		{
			id: 4,
			value: "28",
		},
		{
			id: 4,
			value: "29",
		},
		{
			id: 2,
			value: "30",
		},
		{
			id: 3,
			value: "31",
		},
		{
			id: 4,
			value: "32",
		},
	];

	function QuantityOptions({ options }) {
		return options.map((option) => (
			<option key={option.id} value={option.value}>
				{option.value}
			</option>
		));
	}

	const amountList = [
		{
			id: 1,
			value: "",
		},
		{
			id: 2,
			value: "Cup",
		},
		{
			id: 3,
			value: "Tbsp",
		},
		{
			id: 4,
			value: "Tsp",
		},
		{
			id: 2,
			value: "Liter",
		},
		{
			id: 3,
			value: "Quart",
		},
		{
			id: 4,
			value: "Ounce",
		},
		{
			id: 2,
			value: "Gallon",
		},
		{
			id: 3,
			value: "Pound",
		},
		{
			id: 4,
			value: "Dash",
		},
		{
			id: 4,
			value: "Pinch",
		},
		{
			id: 2,
			value: "Small",
		},
		{
			id: 3,
			value: "Medium",
		},
		{
			id: 4,
			value: "Large",
		},
		
	];

	function AmountOptions({ options }) {
		return options.map((option) => (
			<option key={option.id} value={option.value}>
				{option.value}
			</option>
		));
	}

	async function addNewRecipe() {
		try {
			let payload = await axios.post(
				"http://localhost:3001/api/recipeDatabase/add-recipe",
				{
					recipeTitle: strTitle,
					recipePicture: strThumb,
					recipeArea: strArea,
					recipeCategory: strCategory,
					recipeIngredient1: strIngredient1,
					recipeIngredient2: strIngredient2,
					recipeIngredient3: strIngredient3,
					recipeIngredient4: strIngredient4,
					recipeIngredient5: strIngredient5,
					recipeIngredient6: strIngredient6,
					recipeIngredient7: strIngredient7,
					recipeIngredient8: strIngredient8,
					recipeIngredient9: strIngredient9,
					recipeIngredient10: strIngredient10,
					recipeIngredient11: strIngredient11,
					recipeIngredient12: strIngredient12,
					recipeIngredient13: strIngredient13,
					recipeIngredient14: strIngredient14,
					recipeIngredient15: strIngredient15,
					recipeIngredient16: strIngredient16,
					recipeIngredient17: strIngredient17,
					recipeIngredient18: strIngredient18,
					recipeIngredient19: strIngredient19,
					recipeIngredient20: strIngredient20,
					recipeMeasure1: strMeasure1,
					recipeMeasure2: strMeasure2,
					recipeMeasure3: strMeasure3,
					recipeMeasure4: strMeasure4,
					recipeMeasure5: strMeasure5,
					recipeMeasure6: strMeasure6,
					recipeMeasure7: strMeasure7,
					recipeMeasure8: strMeasure8,
					recipeMeasure9: strMeasure9,
					recipeMeasure10: strMeasure10,
					recipeMeasure11: strMeasure11,
					recipeMeasure12: strMeasure12,
					recipeMeasure13: strMeasure13,
					recipeMeasure14: strMeasure14,
					recipeMeasure15: strMeasure15,
					recipeMeasure16: strMeasure16,
					recipeMeasure17: strMeasure17,
					recipeMeasure18: strMeasure18,
					recipeMeasure19: strMeasure19,
					recipeMeasure20: strMeasure20,
					recipeSource: strSource,
					recipeYoutube: strYoutube,
					recipeInstructions: strInstructions,
				},
				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);	
			console.log("recipePayload: ", payload)
			let newRecipeArray = [...newRecipe, payload.data.payload];
			setNewRecipe(newRecipeArray);
			console.log("newRecipe: ", newRecipe)
			const resetInput = document.querySelector(".recipeName");
			resetInput.value = "";
		} catch (e) {
			console.log(e.response);
		}
	}

	return (
		<div className="newRecipe">
			<h4 className="">Add your own recipe (Limit 20 ingredients)</h4>
			<div className="title-img-type">
				<input
					type="text"
					className="recipeName"
					placeholder="Recipe Name"
					onChange={(event) => setStrTitle(event.target.value)}
				></input>
				<input
					type="text"
					className="imageLocation"
					placeholder="image location (ie https://myimage.com)"
				></input>
				<input
					type="text"
					className="mealType"
					placeholder="Meal Type (chicken, beef, lunch, dinner, etc)"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div className="quantity-ingredients">
				<select className="quantity">
					<QuantityOptions options={quantityList} />
				</select>
				<select className="amount">
					<AmountOptions options={amountList} />
				</select>
				<input
					type="text"
					className="ingredient"
					placeholder="Ingredient"
				></input>
			</div>
			<div>
				<input type="text" className="source" placeholder="Source"></input>
			</div>
			<div>
				<input type="text" className="youtube" placeholder="Youtube"></input>
			</div>
			<input
				type="text"
				className="instructionInput"
				placeholder="Instructions"
			></input>
			<button className="recipeSubmit" onClick={addNewRecipe}>
				Submit Recipe
			</button>
		</div>
	);
}

export default AddRecipe;
