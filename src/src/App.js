import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Footer from "./components/footer/Footer";
import Calendar from "./components/calendar/CalendarWidget";
import Home from "./components/home/Home";

import Nav from "./components/navbar/Navbar";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	const [isSearch, setIsSearch] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	
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
				<Nav
					user={user}
					setUser={setUser}
					setIsSearch={setIsSearch}
					setSearch={setSearch}
				/>
				<Routes>
					<Route
						path="/fetch-movie/:name"
						element={
							<PrivateRoute>
								{/* <Movie /> */}
							</PrivateRoute>
						}
					/>
					<Route
						path="/protected-home/"
						element={
							<PrivateRoute>
								<Calendar setUser={setUser}/>
								{/* <Movies search={search} data={data} setUser={setUser} /> */}
							</PrivateRoute>
						}
					/>
					<Route
						path="/protected-home/favorites"
						element={
							<PrivateRoute>
								{/* <Favorites /> */}
							</PrivateRoute>
						}
					/>
					{/* <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute> */}
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
