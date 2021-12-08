import React, { useContext } from "react";
// import Calendar from "react-calendar";
// import "../../../node_modules/react-calendar/dist/Calendar.css";
import "./CalendarWidget.css";
import { MealContext } from "../../context/mealContext";
let newArray = [];
function CalendarWidget() {
	const mealSelected = useContext(MealContext);
	//const { strMeal } = useContext(MealContext);
	
  console.log(mealSelected.strMeal);
	return (
		<div className="main">
			<div className="calendar">
				
					<button type="button" className="delete">
						Delete
					</button>
					<img
						className="scheduleImg"
						src={`${mealSelected.strMealThumb}/preview`}
					></img>
					{mealSelected.strMeal}
				
				<div>
					<input className="dateInput" type="date"></input>
				</div>
				{/* <Calendar onChange={dateClick} /> */}
			</div>
		</div>
	);
}
export default CalendarWidget;
