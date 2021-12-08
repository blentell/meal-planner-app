import React, { useContext } from "react";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import "./CalendarWidget.css";
import { MealContext } from "../../context/mealContext";
let newArray = [];
function CalendarWidget() {
	const mealSelected = useContext(MealContext);
	const { strMeal } = useContext(MealContext);
	function dateClick(value, mealSelected) {
		console.log("calendarMeals: ", value, mealSelected.strMeal);
	}

	return (
		<div className="main">
			<div className="calendar">
				<Calendar onChange={dateClick} />
			</div>
		</div>
	);
}
export default CalendarWidget;
