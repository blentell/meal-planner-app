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
import AddRecipe from "./components/addRecipe/AddRecipe";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import {
	SearchContext,
	RecipeContext,
	NewRecipeContext,
} from "./context/mealContext";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	const [results, setResults] = useState([]);
	const [results2, setResults2] = useState([]);
	const [searching, setSearching] = useState(false);
	const [recipe, setRecipe] = useState([]);
	const [meals, setMeals] = useState([]);
	const [newRecipe, setNewRecipe] = useState([]);
	const [strMeal, setStrMeal] = useState("");
	const [strMealThumb, setStrMealThumb] = useState("");
	const [strArea, setStrArea] = useState("");
	const [strCategory, setStrCategory] = useState("");
	const [strIngredient1, setStrIngredient1] = useState("");
	const [strIngredient2, setStrIngredient2] = useState("");
	const [strIngredient3, setStrIngredient3] = useState("");
	const [strIngredient4, setStrIngredient4] = useState("");
	const [strIngredient5, setStrIngredient5] = useState("");
	const [strIngredient6, setStrIngredient6] = useState("");
	const [strIngredient7, setStrIngredient7] = useState("");
	const [strIngredient8, setStrIngredient8] = useState("");
	const [strIngredient9, setStrIngredient9] = useState("");
	const [strIngredient10, setStrIngredient10] = useState("");
	const [strIngredient11, setStrIngredient11] = useState("");
	const [strIngredient12, setStrIngredient12] = useState("");
	const [strIngredient13, setStrIngredient13] = useState("");
	const [strIngredient14, setStrIngredient14] = useState("");
	const [strIngredient15, setStrIngredient15] = useState("");
	const [strIngredient16, setStrIngredient16] = useState("");
	const [strIngredient17, setStrIngredient17] = useState("");
	const [strIngredient18, setStrIngredient18] = useState("");
	const [strIngredient19, setStrIngredient19] = useState("");
	const [strIngredient20, setStrIngredient20] = useState("");
	const [strMeasure1, setStrMeasure1] = useState("");
	const [strMeasure1a, setStrMeasure1a] = useState("");
	const [strMeasure1b, setStrMeasure1b] = useState("");
	const [strMeasure2, setStrMeasure2] = useState("");
	const [strMeasure2a, setStrMeasure2a] = useState("");
	const [strMeasure2b, setStrMeasure2b] = useState("");
	const [strMeasure3, setStrMeasure3] = useState("");
	const [strMeasure3a, setStrMeasure3a] = useState("");
	const [strMeasure3b, setStrMeasure3b] = useState("");
	const [strMeasure4, setStrMeasure4] = useState("");
	const [strMeasure4a, setStrMeasure4a] = useState("");
	const [strMeasure4b, setStrMeasure4b] = useState("");
	const [strMeasure5, setStrMeasure5] = useState("");
	const [strMeasure5a, setStrMeasure5a] = useState("");
	const [strMeasure5b, setStrMeasure5b] = useState("");
	const [strMeasure6, setStrMeasure6] = useState("");
	const [strMeasure6a, setStrMeasure6a] = useState("");
	const [strMeasure6b, setStrMeasure6b] = useState("");
	const [strMeasure7, setStrMeasure7] = useState("");
	const [strMeasure7a, setStrMeasure7a] = useState("");
	const [strMeasure7b, setStrMeasure7b] = useState("");
	const [strMeasure8, setStrMeasure8] = useState("");
	const [strMeasure8a, setStrMeasure8a] = useState("");
	const [strMeasure8b, setStrMeasure8b] = useState("");
	const [strMeasure9, setStrMeasure9] = useState("");
	const [strMeasure9a, setStrMeasure9a] = useState("");
	const [strMeasure9b, setStrMeasure9b] = useState("");
	const [strMeasure10, setStrMeasure10] = useState("");
	const [strMeasure10a, setStrMeasure10a] = useState("");
	const [strMeasure10b, setStrMeasure10b] = useState("");
	const [strMeasure11, setStrMeasure11] = useState("");
	const [strMeasure11a, setStrMeasure11a] = useState("");
	const [strMeasure11b, setStrMeasure11b] = useState("");
	const [strMeasure12, setStrMeasure12] = useState("");
	const [strMeasure12a, setStrMeasure12a] = useState("");
	const [strMeasure12b, setStrMeasure12b] = useState("");
	const [strMeasure13, setStrMeasure13] = useState("");
	const [strMeasure13a, setStrMeasure13a] = useState("");
	const [strMeasure13b, setStrMeasure13b] = useState("");
	const [strMeasure14, setStrMeasure14] = useState("");
	const [strMeasure14a, setStrMeasure14a] = useState("");
	const [strMeasure14b, setStrMeasure14b] = useState("");
	const [strMeasure15, setStrMeasure15] = useState("");
	const [strMeasure15a, setStrMeasure15a] = useState("");
	const [strMeasure15b, setStrMeasure15b] = useState("");
	const [strMeasure16, setStrMeasure16] = useState("");
	const [strMeasure16a, setStrMeasure16a] = useState("");
	const [strMeasure16b, setStrMeasure16b] = useState("");
	const [strMeasure17, setStrMeasure17] = useState("");
	const [strMeasure17a, setStrMeasure17a] = useState("");
	const [strMeasure17b, setStrMeasure17b] = useState("");
	const [strMeasure18, setStrMeasure18] = useState("");
	const [strMeasure18a, setStrMeasure18a] = useState("");
	const [strMeasure18b, setStrMeasure18b] = useState("");
	const [strMeasure19, setStrMeasure19] = useState("");
	const [strMeasure19a, setStrMeasure19a] = useState("");
	const [strMeasure19b, setStrMeasure19b] = useState("");
	const [strMeasure20, setStrMeasure20] = useState("");
	const [strMeasure20a, setStrMeasure20a] = useState("");
	const [strMeasure20b, setStrMeasure20b] = useState("");
	const [strSource, setStrSource] = useState("");
	const [strYoutube, setStrYoutube] = useState("");
	const [strInstructions, setStrInstructions] = useState("");

	const quantityList = [
		{
			id: 1,
			value: "",
		},
		{
			id: 2,
			value: "1/8",
		},
		{
			id: 3,
			value: "1/4",
		},
		{
			id: 4,
			value: "1/2",
		},
		{
			id: 5,
			value: "2/3",
		},
		{
			id: 6,
			value: "3/4",
		},
		{
			id: 7,
			value: "1",
		},
		{
			id: 8,
			value: "2",
		},
		{
			id: 9,
			value: "3",
		},
		{
			id: 10,
			value: "4",
		},
		{
			id: 11,
			value: "5",
		},
		{
			id: 12,
			value: "6",
		},
		{
			id: 13,
			value: "7",
		},
		{
			id: 14,
			value: "8",
		},
		{
			id: 15,
			value: "9",
		},
		{
			id: 16,
			value: "10",
		},
		{
			id: 17,
			value: "11",
		},
		{
			id: 18,
			value: "12",
		},
		{
			id: 19,
			value: "13",
		},
		{
			id: 20,
			value: "14",
		},
		{
			id: 21,
			value: "15",
		},
		{
			id: 22,
			value: "16",
		},
		{
			id: 23,
			value: "17",
		},
		{
			id: 24,
			value: "18",
		},
		{
			id: 25,
			value: "19",
		},
		{
			id: 26,
			value: "20",
		},
		{
			id: 27,
			value: "21",
		},
		{
			id: 28,
			value: "22",
		},
		{
			id: 29,
			value: "23",
		},
		{
			id: 30,
			value: "24",
		},
		{
			id: 31,
			value: "25",
		},
		{
			id: 32,
			value: "26",
		},
		{
			id: 33,
			value: "27",
		},
		{
			id: 34,
			value: "28",
		},
		{
			id: 35,
			value: "29",
		},
		{
			id: 36,
			value: "30",
		},
		{
			id: 37,
			value: "31",
		},
		{
			id: 38,
			value: "32",
		},
	];

	function QuantityOptions({ options }) {
		return options.map((option) => (
			<option key={option.id} value={option.value}>
				{option.value}
			</option>
		));
	}

	const amountList = [
		{
			id: 39,
			value: "",
		},
		{
			id: 40,
			value: "Cup",
		},
		{
			id: 41,
			value: "Tbsp",
		},
		{
			id: 42,
			value: "Tsp",
		},
		{
			id: 43,
			value: "Liter",
		},
		{
			id: 44,
			value: "Quart",
		},
		{
			id: 45,
			value: "Ounce",
		},
		{
			id: 46,
			value: "Gallon",
		},
		{
			id: 47,
			value: "Pound",
		},
		{
			id: 48,
			value: "Dash",
		},
		{
			id: 49,
			value: "Pinch",
		},
		{
			id: 50,
			value: "Small",
		},
		{
			id: 51,
			value: "Medium",
		},
		{
			id: 52,
			value: "Large",
		},
	];

	function AmountOptions({ options }) {
		return options.map((option) => (
			<option key={option.id} value={option.value}>
				{option.value}
			</option>
		));
	}

	async function addNewRecipe() {
		setStrMeasure1(`${strMeasure1a} ${strMeasure1b}`);
		setStrMeasure2(`${strMeasure2a} ${strMeasure2b}`);
		setStrMeasure3(`${strMeasure3a} ${strMeasure3b}`);
		setStrMeasure4(`${strMeasure4a} ${strMeasure4b}`);
		setStrMeasure5(`${strMeasure5a} ${strMeasure5b}`);
		setStrMeasure6(`${strMeasure6a} ${strMeasure6b}`);
		setStrMeasure7(`${strMeasure7a} ${strMeasure7b}`);
		setStrMeasure8(`${strMeasure8a} ${strMeasure8b}`);
		setStrMeasure9(`${strMeasure9a} ${strMeasure9b}`);
		setStrMeasure10(`${strMeasure10a} ${strMeasure10b}`);
		setStrMeasure11(`${strMeasure11a} ${strMeasure11b}`);
		setStrMeasure12(`${strMeasure12a} ${strMeasure12b}`);
		setStrMeasure13(`${strMeasure13a} ${strMeasure13b}`);
		setStrMeasure14(`${strMeasure14a} ${strMeasure14b}`);
		setStrMeasure15(`${strMeasure15a} ${strMeasure15b}`);
		setStrMeasure16(`${strMeasure16a} ${strMeasure16b}`);
		setStrMeasure17(`${strMeasure17a} ${strMeasure17b}`);
		setStrMeasure18(`${strMeasure18a} ${strMeasure18b}`);
		setStrMeasure19(`${strMeasure19a} ${strMeasure19b}`);
		setStrMeasure20(`${strMeasure20a} ${strMeasure20b}`);

		try {
			let payload = await axios.post(
				"http://localhost:3001/api/recipeDatabase/add-recipe",
				{
					strMeal: strMeal,
					strMealThumb: strMealThumb,
					strCategory: strCategory,
					strArea: strArea,
					strIngredient1: strIngredient1,
					strIngredient2: strIngredient2,
					strIngredient3: strIngredient3,
					strIngredient4: strIngredient4,
					strIngredient5: strIngredient5,
					strIngredient6: strIngredient6,
					strIngredient7: strIngredient7,
					strIngredient8: strIngredient8,
					strIngredient9: strIngredient9,
					strIngredient10: strIngredient10,
					strIngredient11: strIngredient11,
					strIngredient12: strIngredient12,
					strIngredient13: strIngredient13,
					strIngredient14: strIngredient14,
					strIngredient15: strIngredient15,
					strIngredient16: strIngredient16,
					strIngredient17: strIngredient17,
					strIngredient18: strIngredient18,
					strIngredient19: strIngredient19,
					strIngredient20: strIngredient20,
					strMeasure1: strMeasure1,
					strMeasure2: strMeasure2,
					strMeasure3: strMeasure3,
					strMeasure4: strMeasure4,
					strMeasure5: strMeasure5,
					strMeasure6: strMeasure6,
					strMeasure7: strMeasure7,
					strMeasure8: strMeasure8,
					strMeasure9: strMeasure9,
					strMeasure10: strMeasure10,
					strMeasure11: strMeasure11,
					strMeasure12: strMeasure12,
					strMeasure13: strMeasure13,
					strMeasure14: strMeasure14,
					strMeasure15: strMeasure15,
					strMeasure16: strMeasure16,
					strMeasure17: strMeasure17,
					strMeasure18: strMeasure18,
					strMeasure19: strMeasure19,
					strMeasure20: strMeasure20,
					strSource: strSource,
					strYoutube: strYoutube,
					strInstructions: strInstructions,
				},
				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);
			let newRecipeArray = [...newRecipe, payload.data.payload];
			setNewRecipe(newRecipeArray);
		} catch (e) {
			console.log(e.response);
		}
	}

	const changeMeasure1a = (newMeasure) => {
		setStrMeasure1a(newMeasure);
	};
	const changeMeasure1b = (newMeasure2) => {
		setStrMeasure1b(newMeasure2);
	};

	const changeMeasure2a = (newMeasure3) => {
		setStrMeasure2a(newMeasure3);
	};
	const changeMeasure2b = (newMeasure4) => {
		setStrMeasure2b(newMeasure4);
	};
	const changeMeasure3a = (newMeasure5) => {
		setStrMeasure3a(newMeasure5);
	};
	const changeMeasure3b = (newMeasure6) => {
		setStrMeasure3b(newMeasure6);
	};
	const changeMeasure4a = (newMeasure7) => {
		setStrMeasure4a(newMeasure7);
	};
	const changeMeasure4b = (newMeasure8) => {
		setStrMeasure4b(newMeasure8);
	};
	const changeMeasure5a = (newMeasure9) => {
		setStrMeasure5a(newMeasure9);
	};
	const changeMeasure5b = (newMeasure10) => {
		setStrMeasure5b(newMeasure10);
	};
	const changeMeasure6a = (newMeasure11) => {
		setStrMeasure6a(newMeasure11);
	};
	const changeMeasure6b = (newMeasure12) => {
		setStrMeasure6b(newMeasure12);
	};
	const changeMeasure7a = (newMeasure13) => {
		setStrMeasure7a(newMeasure13);
	};
	const changeMeasure7b = (newMeasure14) => {
		setStrMeasure7b(newMeasure14);
	};
	const changeMeasure8a = (newMeasure15) => {
		setStrMeasure8a(newMeasure15);
	};
	const changeMeasure8b = (newMeasure16) => {
		setStrMeasure8b(newMeasure16);
	};
	const changeMeasure9a = (newMeasure17) => {
		setStrMeasure9a(newMeasure17);
	};
	const changeMeasure9b = (newMeasure18) => {
		setStrMeasure9b(newMeasure18);
	};
	const changeMeasure10a = (newMeasure19) => {
		setStrMeasure10a(newMeasure19);
	};
	const changeMeasure10b = (newMeasure20) => {
		setStrMeasure10b(newMeasure20);
	};
	const changeMeasure11a = (newMeasure21) => {
		setStrMeasure11a(newMeasure21);
	};
	const changeMeasure11b = (newMeasure22) => {
		setStrMeasure11b(newMeasure22);
	};
	const changeMeasure12a = (newMeasure23) => {
		setStrMeasure12a(newMeasure23);
	};
	const changeMeasure12b = (newMeasure24) => {
		setStrMeasure12b(newMeasure24);
	};
	const changeMeasure13a = (newMeasure25) => {
		setStrMeasure13a(newMeasure25);
	};
	const changeMeasure13b = (newMeasure26) => {
		setStrMeasure13b(newMeasure26);
	};
	const changeMeasure14a = (newMeasure27) => {
		setStrMeasure14a(newMeasure27);
	};
	const changeMeasure14b = (newMeasure28) => {
		setStrMeasure14b(newMeasure28);
	};
	const changeMeasure15a = (newMeasure29) => {
		setStrMeasure15a(newMeasure29);
	};
	const changeMeasure15b = (newMeasure30) => {
		setStrMeasure15b(newMeasure30);
	};
	const changeMeasure16a = (newMeasure31) => {
		setStrMeasure16a(newMeasure31);
	};
	const changeMeasure16b = (newMeasure32) => {
		setStrMeasure16b(newMeasure32);
	};
	const changeMeasure17a = (newMeasure33) => {
		setStrMeasure17a(newMeasure33);
	};
	const changeMeasure17b = (newMeasure34) => {
		setStrMeasure17b(newMeasure34);
	};
	const changeMeasure18a = (newMeasure35) => {
		setStrMeasure18a(newMeasure35);
	};
	const changeMeasure18b = (newMeasure36) => {
		setStrMeasure18b(newMeasure36);
	};
	const changeMeasure19a = (newMeasure37) => {
		setStrMeasure19a(newMeasure37);
	};
	const changeMeasure19b = (newMeasure38) => {
		setStrMeasure19b(newMeasure38);
	};
	const changeMeasure20a = (newMeasure39) => {
		setStrMeasure20a(newMeasure39);
	};
	const changeMeasure20b = (newMeasure40) => {
		setStrMeasure20b(newMeasure40);
	};

	async function getMeals() {
		try {
			let url = "http://localhost:3001/api/meals/";

			let payload = await axios.get(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
				},
			});
			setMeals(payload.data.payload);
		} catch (e) {
			console.log(e);
		}
	}
	async function deleteMeals(mealID) {
		try {
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
			setMeals(filteredMealArray);
		} catch (e) {
			console.log(e);
		}
	}

	async function updateMeal(mealID) {
		try {
			let url = `http://localhost:3001/api/meals/update-meal/${mealID}`;
			let newDate = document.querySelector(`[name="${mealID}"`);

			let payload = await axios.put(
				url,
				{
					mealDate: newDate.value,
				},
				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);
		} catch (e) {
			console.log(e);
		}
	}
	async function getRecipe(mealID) {
		try {
			let url = `http://localhost:3001/api/meals/get-meal/${mealID}`;

			let payload = await axios.get(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
				},
			});
			let data = payload.data.payload;
			setRecipe(data);
		} catch (e) {
			console.log(e);
		}
	}

	async function handleSearchChange(inputValue) {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
		);

		const data = await response.json();
		setResults(data.meals || []);

		const response2 = await fetch(
			`http://localhost:3001/api/recipeDatabase/get-recipe/${inputValue}`,
			{
				method: "GET",
				headers: {
					authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
				},
			}
		);
		const data2 = await response2.json();
		setResults2(data2.payload || []);
		setSearching(true);
	}

	async function handleMealSelected(mealSelected) {
		setSearching(false);
		try {
			let payload = await axios.post(
				"http://localhost:3001/api/meals/add-meal",
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
					mealInstructions: mealSelected.strInstructions,
				},
				{
					headers: {
						authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
					},
				}
			);
			let newMealArray = [...meals, payload.data.payload];
			const resetSearch = document.querySelector(".search-form-control");
			resetSearch.value = "";
			setMeals(newMealArray);
		} catch (e) {
			console.log(e.response);
		}
	}

	const searchContextValue = {
		handleMealSelected,
		handleSearchChange,
		results,
		results2,
		searching,
	};

	const recipeContextValue = {
		recipe,
		getRecipe,
		getMeals,
		meals,
		updateMeal,
		deleteMeals,
	};
	const newRecipeContextValue = {
		strMeasure1a,
		strMeasure1b,
		strMeasure2,
		strMeasure2a,
		strMeasure2b,
		strMeasure3a,
		strMeasure3b,
		strMeasure4a,
		strMeasure4b,
		strMeasure5a,
		strMeasure5b,
		strMeasure6a,
		strMeasure6b,
		strMeasure7a,
		strMeasure7b,
		strMeasure8a,
		strMeasure8b,
		strMeasure9a,
		strMeasure9b,
		strMeasure10a,
		strMeasure10b,
		strMeasure11a,
		strMeasure11b,
		strMeasure12a,
		strMeasure12b,
		strMeasure13a,
		strMeasure13b,
		strMeasure14a,
		strMeasure14b,
		strMeasure15a,
		strMeasure15b,
		strMeasure16a,
		strMeasure16b,
		strMeasure17a,
		strMeasure17b,
		strMeasure18a,
		strMeasure18b,
		strMeasure19a,
		strMeasure19b,
		strMeasure20a,
		strMeasure20b,
		setStrMeal,
		setStrMealThumb,
		setStrArea,
		setStrCategory,
		setStrIngredient1,
		setStrIngredient2,
		setStrIngredient3,
		setStrIngredient4,
		setStrIngredient5,
		setStrIngredient6,
		setStrIngredient7,
		setStrIngredient8,
		setStrIngredient9,
		setStrIngredient10,
		setStrIngredient11,
		setStrIngredient12,
		setStrIngredient13,
		setStrIngredient14,
		setStrIngredient15,
		setStrIngredient16,
		setStrIngredient17,
		setStrIngredient18,
		setStrIngredient19,
		setStrIngredient20,
		setStrSource,
		setStrYoutube,
		setStrInstructions,
		quantityList,
		QuantityOptions,
		amountList,
		AmountOptions,
		addNewRecipe,
changeMeasure1a,
changeMeasure1b,
changeMeasure2a,
changeMeasure2b,
changeMeasure3a,
changeMeasure3b,
changeMeasure4a,
changeMeasure4b,
changeMeasure5a,
changeMeasure5b,
changeMeasure6a,
changeMeasure6b,
changeMeasure7a,
changeMeasure7b,
changeMeasure8a,
changeMeasure8b,
changeMeasure9a,
changeMeasure9b,
changeMeasure10a,
changeMeasure10b,
changeMeasure11a,
changeMeasure11b,
changeMeasure12a,
changeMeasure12b,
changeMeasure13a,
changeMeasure13b,
changeMeasure14a,
changeMeasure14b,
changeMeasure15a,
changeMeasure15b,
changeMeasure16a,
changeMeasure16b,
changeMeasure17a,
changeMeasure17b,
changeMeasure18a,
changeMeasure18b,
changeMeasure19a,
changeMeasure19b,
changeMeasure20a,
changeMeasure20b
	};

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
								<RecipeContext.Provider value={recipeContextValue}>
									<CalendarWidget setUser={setUser} />
								</RecipeContext.Provider>
							</PrivateRoute>
						}
					/>
					<Route
						path="/protected-home/Meals"
						element={
							<PrivateRoute>
								<RecipeContext.Provider value={recipeContextValue}>
									<Meals />
								</RecipeContext.Provider>
							</PrivateRoute>
						}
					/>
					<Route
						path="/protected-home/add-recipes"
						element={
							<PrivateRoute>
								<NewRecipeContext.Provider value={newRecipeContextValue}>
									<AddRecipe />
								</NewRecipeContext.Provider>
							</PrivateRoute>
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
