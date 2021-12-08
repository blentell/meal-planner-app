import React, { useContext } from "react";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import "./CalendarWidget.css";
import { MealContext } from "../../context/mealContext";
let newArray = [];
function CalendarWidget() {
	const mealSelected = useContext(MealContext);
	const { strMeal } = useContext(MealContext);
	function dateClick(value) {
		console.log("calendarMeals: ", mealSelected.strMeal);
	}
  // function tileChange({ date, view}) {
	// 	console.log("event: ", Date());
	// 	if (view === "month" && Date() === 1) {
	// 		return <p>It's Sunday!</p>;
	// 	} else {
	// 		return null;
	// 	}
	// }
	return (
		<div className="main">
			<div className="calendar">
        <Calendar onChange={dateClick} />
			</div>
		</div>
	);
}
export default CalendarWidget;
