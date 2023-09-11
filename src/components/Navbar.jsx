import React, {useState} from "react";
import "./Navbar.css"
import Carrito from "./CartWidget"
import Logo from "./logoPrincipal";
import { NavLink } from "react-router-dom";
//import carrito from "../assets/carrito/cartW.svg"
//import App from "../App";

const NavBar = () => {
    const  [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="nav_logo"><Logo/> Las agujas de Alita</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <NavLink to="/inicio">Inicio</NavLink>
                <NavLink to="/prendasParaVestir">Prendas para vestir</NavLink>
                <NavLink to="/almohadones">Almohadones</NavLink>
                <NavLink to="/caminos">Caminos</NavLink>
                <Carrito/>
            </div>
            <div className={`nav_toogle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

export default NavBar