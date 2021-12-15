import React, { useState, useContext } from "react";
import { RecipeContext } from "../../context/mealContext";
import "./AddRecipe.css";

function AddRecipe() {
	const { recipe } = useContext(RecipeContext);
	const select = document.querySelectorAll(".quantity");
	//   const quantity = useState([{ value: "val1", name: "" }, { value: "val2", name: "text1" }, { value: "val3", name: "text2" }]);
	// 	console.log(quantity.length)
	//   let quantityArray = quantity.length > 0 && quantity.map((item, i) => {
	//     return (
	//       <option key={i} value={item.value}>{item.name}</option>)
	// })
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
	return (
		<div className="newRecipe">
			<h4 className="">Add your own recipe (Limit 20 ingredients)</h4>
			<div className="title-img-type">
				<input
					type="text"
					className="recipeName"
					placeholder="Recipe Name"
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
			<input
				type="text"
				className="instructionInput"
				placeholder="Instructions"
			></input>
		</div>
	);
}

export default AddRecipe;
