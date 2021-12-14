import React, {useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../../context/mealContext";
import SearchList from "../search/SearchList";

import "./Navbar.css"
function Nav({ user, setUser}) {
	let linkTitle1 = user ? user.username : "Sign up";
	let link1 = user ? "/profile" : "/sign-up";
	let linkTitle2 = user ? "Logout" : "Sign in";
	let link2 = user ? "/" : "/sign-in";
	let linkTitle3 = user ? "Schedule" : "";
	let link3 = user ? "/protected-home" : "/sign-in";
	let linkTitle4 = user ? "Recipes" : "";
	let link4 = user ? "/protected-home/meals" : "/sign-in";
	let logoutButton = user ? logout : () => { };
	const { title, handleSearchChange, results, searching } = useContext(SearchContext);
	

	function logout() {
		setUser(null);
		window.localStorage.removeItem("jwtToken");
		window.location.reload()
	}
	
	return (
		<nav className="navbar">
			<div className="container">
				<NavLink exact activeClassName="active" to="/" className="navbar-brand">
					Home
				</NavLink>
				<div className="navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								to={link1}
								className="nav-link"
								aria-current="page"
							>
								{linkTitle1}
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to={link2}
								className="nav-link"
								onClick={() => logoutButton()}
							>
								{linkTitle2}
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={link3} className="nav-link">
								{linkTitle3}
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={link4} className="nav-link">
								{linkTitle4}
							</NavLink>
						</li>
					</ul>
					<div className="form-group">
						<button
							className="printButton"
							type="button"
							onClick={() => window.print()}
							style={
								user ? { visibility: "visible" } : { visibility: "hidden" }
							}
						>
							Print
						</button>
						<input
							className="search-form-control"
							name="search"
							placeholder="Search"
							aria-label="Search"
							onChange={(e) => handleSearchChange(e.target.value)}
							style={
								user ? { visibility: "visible" } : { visibility: "hidden" }
							}
						/>
					</div>
					{results !== "" && searching && <SearchList />}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
