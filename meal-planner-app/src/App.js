import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Footer from "./components/footer/Footer";
import CalendarWidget from "./components/calendar/CalendarWidget";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Navbar";
import Meals from "./components/meals/Meals";


import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { SearchContext, MealContext } from "./context/mealContext";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [mealSelected, setMealSelected] = useState("");
  const [searching, setSearching] = useState(false);


	async function handleSearchChange(inputValue) {		
    setSearchValue(inputValue);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);

    const data = await response.json();
    setResults(data.meals || []);
		setSearching(true);		
  }

	async function handleMealSelected(mealSelected) {
		setMealSelected(mealSelected);
		//console.log("mealSelected: ", mealSelected);
		setSearching(false);
		try {
			let payload = await axios.post(
				"http://localhost:3001/api/meals/add-meal/",
				{
					mealTitle: mealSelected.strMeal,
					mealPicture: mealSelected.strMealThumb,					
					mealArea: mealSelected.strArea,
					mealCategory: mealSelected.strCategory,
					mealIngredient1: mealSelected.strIngredient1,
					mealIngredient2: mealSelected.strIngredient2,
					mealIngredient3: mealSelected.strIngredient3,
					mealIngredient4: mealSelected.strIngredient4,
					mealIngredient5: mealSelected.strIngredient5,
					mealIngredient6: mealSelected.strIngredient6,
					mealIngredient7: mealSelected.strIngredient7,
					mealIngredient8: mealSelected.strIngredient8,
					mealIngredient9: mealSelected.strIngredient9,
					mealIngredient10: mealSelected.strIngredient10,
					mealIngredient11: mealSelected.strIngredient11,
					mealIngredient12: mealSelected.strIngredient12,
					mealIngredient13: mealSelected.strIngredient13,
					mealIngredient14: mealSelected.strIngredient14,
					mealIngredient15: mealSelected.strIngredient15,
					mealIngredient16: mealSelected.strIngredient16,
					mealIngredient17: mealSelected.strIngredient17,
					mealIngredient18: mealSelected.strIngredient18,
					mealIngredient19: mealSelected.strIngredient19,
					mealIngredient20: mealSelected.strIngredient20,
					mealMeasure1: mealSelected.strMeasure1,
					mealMeasure2: mealSelected.strMeasure2,
					mealMeasure3: mealSelected.strMeasure3,
					mealMeasure4: mealSelected.strMeasure4,
					mealMeasure5: mealSelected.strMeasure5,
					mealMeasure6: mealSelected.strMeasure6,
					mealMeasure7: mealSelected.strMeasure7,
					mealMeasure8: mealSelected.strMeasure8,
					mealMeasure9: mealSelected.strMeasure9,
					mealMeasure10: mealSelected.strMeasure10,
					mealMeasure11: mealSelected.strMeasure11,
					mealMeasure12: mealSelected.strMeasure12,
					mealMeasure13: mealSelected.strMeasure13,
					mealMeasure14: mealSelected.strMeasure14,
					mealMeasure15: mealSelected.strMeasure15,
					mealMeasure16: mealSelected.strMeasure16,
					mealMeasure17: mealSelected.strMeasure17,
					mealMeasure18: mealSelected.strMeasure18,
					mealMeasure19: mealSelected.strMeasure19,
					mealMeasure20: mealSelected.strMeasure20,
					mealSource: mealSelected.strSource,
					mealYoutube: mealSelected.strYoutube,
				},
				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);
      // window.location.reload(false);
			// console.log("AppMealSelected: ", mealSelected);
			console.log("Apppayload: ", payload);
		} catch (e) {
			console.log(e.response);
		}
	}

	

  const searchContextValue = {
    handleMealSelected,
    handleSearchChange,
    results,
		searching,		
  }

	useEffect(() => {
		let jwtToken = window.localStorage.getItem("jwtToken");

		if (jwtToken) {
			let decodedToken = jwtDecode(jwtToken);
			const currentTime = Date.now() / 1000;

			if (decodedToken.exp < currentTime) {
				window.localStorage.removeItem("jwtToken");
				setUser(null);
			} else {
				setUser({
					email: decodedToken.email,
					username: decodedToken.username,
				});
			}
		}
	}, []);

	return (
		<>
			<ToastContainer theme="colored" />
			<Router>
				<SearchContext.Provider value={searchContextValue}>
					<Nav user={user} setUser={setUser} />
				</SearchContext.Provider>

				<Routes>					
					<Route
						path="/protected-home/"
						element={
							<PrivateRoute>
								<CalendarWidget setUser={setUser}/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/protected-home/Meals"
						element={
							<MealContext.Provider value={mealSelected}>
								<PrivateRoute>
									<Meals />
								</PrivateRoute>
							</MealContext.Provider>
						}
					/>

					<Route path="/sign-up" element={<Signup />} />
					<Route path="/sign-in" element={<Signin setUser={setUser} />} />
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
