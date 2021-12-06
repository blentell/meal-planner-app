import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Nav({ user, setUser, setIsSearch, setSearch }) {
	let linkTitle1 = user ? user.username : "Sign up";
	let link1 = user ? "/profile" : "/sign-up";
	let linkTitle2 = user ? "Logout" : "Sign in";
	let link2 = user ? "/" : "/sign-in";
	let linkTitle3 = user ? "Calendar" : "";
	let link3 = user ? "/protected-home" : "/sign-in";
	let linkTitle4 = user ? "Meals" : "";
	let link4 = user ? "/protected-home/meals" : "/sign-in";
	let logoutButton = user ? logout : () => { };
	
	async function handleSearchMovie() {
		setIsSearch(true);
	}

	function logout() {
		setUser(null);
		window.localStorage.removeItem("jwtToken");
	}
	async function handleOnChange(e) {
		e.preventDefault();
		setSearch(e.target.value);
	}

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Home
				</Link>
				<div className="navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to={link1} className="nav-link active" aria-current="page">
								{linkTitle1}
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={link2}
								className="nav-link"
								onClick={() => logoutButton()}
							>
								{linkTitle2}
							</Link>
						</li>
						<li className="nav-item">
							<Link to={link3} className="nav-link">
								{linkTitle3}
							</Link>
						</li>
						<li className="nav-item">
							<Link to={link4} className="nav-link">
								{linkTitle4}
							</Link>
						</li>
					</ul>

					<input
						className="search-form-control"
						name="search"
						placeholder="Search"
						aria-label="Search"
						onChange={handleOnChange}
						style={user ? { visibility: "visible" } : { visibility: "hidden" }}
					/>
					<button
						className="search-btn"
						onClick={handleSearchMovie}
						style={user ? { visibility: "visible" } : { visibility: "hidden" }}
					>
						Search
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
