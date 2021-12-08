import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Footer from "./components/footer/Footer";
import Calendar from "./components/calendar/CalendarWidget";
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
  
	function handleMealSelected(mealSelected) {
		setMealSelected(mealSelected);		
		setSearching(false);
	}


  const searchContextValue = {
    handleMealSelected,
    handleSearchChange,
    results,
    searching
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
						path="/fetch-movie/:name"
						element={<PrivateRoute>{/* <Movie /> */}</PrivateRoute>}
					/>
					<Route
						path="/protected-home/"
						element={
							<MealContext.Provider value={mealSelected}>
								<PrivateRoute>
									<Calendar
										setUser={setUser}										
									/>
								</PrivateRoute>
							</MealContext.Provider>
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
