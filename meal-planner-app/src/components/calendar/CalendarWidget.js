import React, { useContext, useEffect } from "react";
import CheckToken from "../../hooks/CheckToken";
import { useNavigate, Link } from "react-router-dom";
import { RecipeContext } from "../../context/mealContext";
import "./CalendarWidget.css";

function CalendarWidget() {
	const { checkJwtToken } = CheckToken();
	const navigate = useNavigate();
const {getRecipe, getMeals, updateMeal, deleteMeals, meals} = useContext(RecipeContext)


	
	useEffect(() => {
		getMeals();
	}, []);

	useEffect(() => {
		if (checkJwtToken()) {
			navigate("/protected-home");
		}
  }, []);
   
  let link = "/protected-home/meals";
 
   
  return (
    <div className="main">
			{meals.map((item) => {
				console.log(meals)
        return (
					<>
						<div className="calendar">
							<div className="buttonDiv">
								<button
									type="button"
									onClick={() => deleteMeals(item._id)}
									className="delete"
								>
									Delete
								</button>
							</div>
							<Link
								to={link}
								className="recipe-title"
								onClick={() => getRecipe(item._id)}
							>
								<div className="imgDiv">
									<img
										className="scheduleImg"
										src={`${item.mealPicture}`}
										alt="preview thumbnail"
									></img>
								</div>
							</Link>
							<Link
								to={link}
								className="recipe-title"
								onClick={() => getRecipe(item._id)}
							>
								<div className="title">
									{item.mealTitle}
								</div>
							</Link>
							<div className="inputDiv">
								<input
									className="dateInput"
									type="text"
									name={item._id}
									defaultValue={item.mealDate}
								></input>
								<button
									onClick={() => updateMeal(item._id)}
									className="setDate"
								>
									Set Date
								</button>
							</div>
						</div>
					</>
				);
      })}
      
		</div>
	);
}
export default CalendarWidget;
