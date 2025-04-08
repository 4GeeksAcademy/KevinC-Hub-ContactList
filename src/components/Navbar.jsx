import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="Header">
				<i className="fa-brands fa-2x fa-galactic-republic"></i>
				<h1>Vader's Contact Log</h1>
			</div>
			<div className="AddCard">
			<Link to="/">
				<i class="fa-solid fa-house fa-lg"></i>
			</Link>
				<Link className="btn btn-primary" to={"/create"}>Add Stormtrooper</Link>
			</div>
		</nav>
	);
};
