import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import CheckToken from "../../hooks/CheckToken";
import { useNavigate } from "react-router-dom";
// import Calendar from "react-calendar";
// import "../../../node_modules/react-calendar/dist/Calendar.css";
import "./CalendarWidget.css";
// import { MealContext } from "../../context/mealContext";

function CalendarWidget() {
  // const mealSelected = useContext(MealContext);
  	const { checkJwtToken } = CheckToken();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  
	//const { strMeal } = useContext(MealContext);

  
	useEffect(async () => {
		await getMeals();
	}, []);
// getMeals()
	async function getMeals() {
		try {
			let url = "http://localhost:3001/api/meals/";
		
			let payload = await axios.get(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
				},
      });
      console.log("payload: ", payload.data.payload)
			setMeals(payload.data.payload);
		} catch (e) {
			console.log(e);
		}
	}
	async function deleteMeals(mealID) {
		try {
			console.log('mealList: ', meals);
			let url = `http://localhost:3001/api/meals/delete-meal/${mealID}`;
			
			let payload = await axios.delete(
				url,

				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);
			let newMeal = [...meals];

			let filteredMealArray = newMeal.filter(
				(item) => item._id !== payload.data.payload._id
			);
			console.log("deletePayload: ", payload.data.payload);
			setMeals(filteredMealArray);
		} catch (e) {
			console.log(e);
		}
	}
	
  		useEffect(() => {
				if (checkJwtToken()) {
					navigate("/protected-home");
				}
			}, []);

	return (
		<div className="main">
      {meals.map((item) => {
        return (
          <div className="calendar">
            <button type="button" onClick={()=>deleteMeals(item._id)}className="delete">
              Delete
            </button>
            <img
              className="scheduleImg"
              src={`${item.mealPicture}/preview`}
            ></img>
            {item.mealTitle}

            <div>
              <input className="dateInput" type="date"></input>
            </div>
          </div>
        );
			})}
		</div>
	);
}
export default CalendarWidget;
