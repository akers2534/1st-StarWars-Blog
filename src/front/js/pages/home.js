import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  People  from "../component/People.js";
import  Planets  from "../component/Planets.js";
import  Starships  from "../component/Starships.js";
import  {Navbar}  from "../component/navbar.js";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="CSS text-center">
			<h2>People</h2>
			<People/> 
			<h2>Planets</h2> 
			<Planets/>
			<Starships/>
			<Navbar/>
			
		</div>
	);
};
