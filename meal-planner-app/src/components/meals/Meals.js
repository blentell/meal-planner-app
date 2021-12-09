import React, { useContext } from "react";
import { MealContext } from "../../context/mealContext";
import "./index.css";
function Meals() {
	const mealSelected = useContext(MealContext);
	// const { strMeasure1 } = useContext(MealContext);
	// console.log(mealSelected)
// Trying to find a better way to iterate thru the ingredients//
	//console.log(Object.keys(mealSelected).length)
	// function ingredientList() {
	// 	let ingredientAmount = [];
	// 	let ingredientType = [];
	// 	// console.log("1", Object.keys(mealSelected),Object.values(mealSelected));
	// 	for (let i = 8; i < 28; i++) {
	// 		ingredientAmount.push(Object.keys(mealSelected)[i + 1]);
	// 		ingredientType.push(Object.values(mealSelected)[i + 1]);
	// 	}
	// 	for (let j = 28; j < 48; j++) {
	// 		ingredientAmount.push(Object.keys(mealSelected)[j + 1]);
	// 		ingredientType.push(Object.values(mealSelected)[j + 1]);
	// 	}
	// 	console.log(ingredientAmount);
	// 	console.log(ingredientType);
	// }

	// ingredientList();
	return (
		<div className="recipe">
			<div className="meals">
				<img
					className="mealImg"
					src={mealSelected.strMealThumb}
					alt="meal thumbnail"
				/>
			</div>
			<h3 className="meal-Info">{mealSelected.strMeal}</h3>
			<div className="info-section">
				<label htmlFor="">Type</label>
				<span>{mealSelected.strCategory}</span>
			</div>
			<div className="info-section">
				<label htmlFor="">Ingredients</label>
				<ul className="list">
					<li>
						{mealSelected.strMeasure1} {mealSelected.strIngredient1}
					</li>
					<li>
						{mealSelected.strMeasure2} {mealSelected.strIngredient2}
					</li>
					<li>
						{mealSelected.strMeasure3} {mealSelected.strIngredient3}
					</li>
					<li>
						{mealSelected.strMeasure4} {mealSelected.strIngredient4}
					</li>
					<li>
						{mealSelected.strMeasure5} {mealSelected.strIngredient5}
					</li>
					<li>
						{mealSelected.strMeasure6} {mealSelected.strIngredient6}
					</li>
					<li>
						{mealSelected.strMeasure7} {mealSelected.strIngredient7}
					</li>
					<li>
						{mealSelected.strMeasure8} {mealSelected.strIngredient8}
					</li>
					<li>
						{mealSelected.strMeasure9} {mealSelected.strIngredient9}
					</li>
					<li>
						{mealSelected.strMeasure10} {mealSelected.strIngredient10}
					</li>
					<li>
						{mealSelected.strMeasure11} {mealSelected.strIngredient11}
					</li>
					<li>
						{mealSelected.strMeasure12} {mealSelected.strIngredient12}
					</li>
					<li>
						{mealSelected.strMeasure13} {mealSelected.strIngredient13}
					</li>
					<li>
						{mealSelected.strMeasure14} {mealSelected.strIngredient14}
					</li>
					<li>
						{mealSelected.strMeasure15} {mealSelected.strIngredient15}
					</li>
					<li>
						{mealSelected.strMeasure16} {mealSelected.strIngredient16}
					</li>
					<li>
						{mealSelected.strMeasure17} {mealSelected.strIngredient17}
					</li>
					<li>
						{mealSelected.strMeasure18} {mealSelected.strIngredient18}
					</li>
					<li>
						{mealSelected.strMeasure19} {mealSelected.strIngredient19}
					</li>
					<li>
						{mealSelected.strMeasure20} {mealSelected.strIngredient20}
					</li>
				</ul>
			</div>
			<div className="info-section instructions">
				<label htmlFor="">Instructions</label>
				<span>{mealSelected.strInstructions}</span>
			</div>
		</div>
	);
}

export default Meals;
