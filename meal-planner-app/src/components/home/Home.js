import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const payload = await axios.get(
				"https://www.themealdb.com/api/json/v1/1/random.php"
			);
			let thumbnail = payload.data.meals[0].strMealThumb;
			setData(thumbnail);
		};
		fetchData();
	}, []);

	return (
    <div className="homePage">      
			<div className="home">
				<img className="tasty" src={data}></img>
			</div>
			<div>
				<h1 className="text">Plan out your daily meals!</h1>
			</div>
			<div className="logoContainer">
				<img className="logo" src="../../images/Meal-App-Logo.jpg"></img>
			</div>
		</div>
	);
}

export default Home;
