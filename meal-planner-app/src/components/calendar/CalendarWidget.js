import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import CheckToken from "../../hooks/CheckToken";
import { useNavigate } from "react-router-dom";
import "./CalendarWidget.css";

function CalendarWidget() {
	const { checkJwtToken } = CheckToken();
	const navigate = useNavigate();
	const [meals, setMeals] = useState([]);
  const now = new Date();


	async function getMeals() {
		try {
			let url = "http://localhost:3001/api/meals/";

			let payload = await axios.get(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
				},
			});
      console.log("payload: ", payload.data.payload);
      
      // payload.data.payload[0].mealDate.toString().split("T")[0];
			setMeals(payload.data.payload);
		} catch (e) {
			console.log(e);
		}
	}
	async function deleteMeals(mealID) {
		try {
			// console.log("mealList: ", meals);
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
			//console.log("deletePayload: ", payload.data.payload);
			setMeals(filteredMealArray);
		} catch (e) {
			console.log(e);
		}
  }
  
  async function updateMeal(mealID) {
    	try {
				let url = `http://localhost:3001/api/meals/update-meal/${mealID}`;
        let newDate = document.querySelector(`[name="${mealID}"`);
        console.log(newDate.value)
        let payload = await axios.put(url, {
        mealDate: newDate.value
        },
          {
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				});
				console.log("payload: ", payload.data.payload);
				// setMeals(payload.data.payload);
			} catch (e) {
				console.log(e);
			}
  }
	useEffect(() => {
		getMeals();
	}, []);

	useEffect(() => {
		if (checkJwtToken()) {
			navigate("/protected-home");
		}
	}, []);

	return (
		<div className="main">
			{meals.map((item) => {
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
							<div className="imgDiv">
								<img
									className="scheduleImg"
									src={`${item.mealPicture}/preview`}
								></img>
							</div>
							<div className="title">{item.mealTitle}</div>
							<div className="inputDiv">
								<input									
									className="dateInput"
                  type="text"
                  name={item._id}
                  defaultValue={item.mealDate}
                  //defaultValue={item.mealDate}                  
                ></input>
                <button onClick={() => updateMeal(item._id)}className="setDate">Set Date</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
}
export default CalendarWidget;
