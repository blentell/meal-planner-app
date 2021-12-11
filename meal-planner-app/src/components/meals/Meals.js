import React, { useState, useContext } from "react";
import { RecipeContext } from "../../context/mealContext";
// import axios from "axios";
// import CalendarWidget from "../calendar/CalendarWidget";
import "./index.css";
function Meals() {
	const { recipe } = useContext(RecipeContext);

	console.log("Meal: ", [recipe])

	return (
			<div className="currentRecipe">
				{[recipe].map((item) => {
					return (
						<>
							<div className="meals">
								<img
									className="mealImg"
									src={item.mealPicture}
									alt="meal thumbnail"
								/>
							</div>
							<h3 className="meal-Info">{item.mealTitle}</h3>
							<div className="info-section">
								<label htmlFor="">Type</label>
								<span>{item.strCategory}</span>
							</div>
							<div className="info-section">
								<label htmlFor="">Ingredients</label>
								<ul className="list">
									<li>
										{item.mealMeasure1} {item.mealIngredient1}
									</li>
									<li>
										{item.mealMeasure2} {item.mealIngredient2}
									</li>
									<li>
										{item.mealMeasure3} {item.mealIngredient3}
									</li>
									<li>
										{item.mealMeasure4} {item.mealIngredient4}
									</li>
									<li>
										{item.mealMeasure5} {item.mealIngredient5}
									</li>
									<li>
										{item.mealMeasure6} {item.mealIngredient6}
									</li>
									<li>
										{item.mealMeasure7} {item.mealIngredient7}
									</li>
									<li>
										{item.mealMeasure8} {item.mealIngredient8}
									</li>
									<li>
										{item.mealMeasure9} {item.mealIngredient9}
									</li>
									<li>
										{item.mealMeasure10} {item.mealIngredient10}
									</li>
									<li>
										{item.mealMeasure11} {item.mealIngredient11}
									</li>
									<li>
										{item.mealMeasure12} {item.mealIngredient12}
									</li>
									<li>
										{item.mealMeasure13} {item.mealIngredient13}
									</li>
									<li>
										{item.mealMeasure14} {item.mealIngredient14}
									</li>
									<li>
										{item.mealMeasure15} {item.mealIngredient15}
									</li>
									<li>
										{item.mealMeasure16} {item.mealIngredient16}
									</li>
									<li>
										{item.mealMeasure17} {item.mealIngredient17}
									</li>
									<li>
										{item.mealMeasure18} {item.mealIngredient18}
									</li>
									<li>
										{item.mealMeasure19} {item.mealIngredient19}
									</li>
									<li>
										{item.mealMeasure20} {item.mealIngredient20}
									</li>
								</ul>
							</div>
							<div className="info-section instructions">
								<label htmlFor="">Instructions</label>
								<span>{item.mealInstructions}</span>
							</div>
						</>
					);
				})}
			</div>
	);
}

export default Meals;
