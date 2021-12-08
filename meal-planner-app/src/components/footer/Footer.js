import React from "react";
import "./Footer.css";
function Footer() {
	return (
		<nav className="footer">
			<div className="footerContainer">
				<div className="footerItems" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								href="https://www.facebook.com"
								className="fa fa-facebook"
								aria-current="page"
								target="_none"
							></a>
						</li>
						<li className="nav-item">
							<a href="https://www.twitter.com" className="fa fa-twitter"></a>
						</li>
						<li className="nav-item">
							<a
								href="https://www.instagram.com"
								className="fa fa-instagram"
							></a>
						</li>
						<li className="nav-item">
							<a href="https://www.snapchat.com" className="fa fa-snapchat">

							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Footer;
