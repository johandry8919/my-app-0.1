import React from "react";
import './Nav.css'
import logo2 from '../../assets/img/logo2.png'
import { NavLink } from "react-router-dom";



function Nav(){
    return(
      
<nav className="navegacion nav">

<div className="logo">
    <img  src={logo2} alt="logo" />
</div>

<ul className="nav-ul">
    <li className="nav-li">
            <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
    </li>
    <li className="nav-li">
           
          <a activeClassName="active"  href="https://johandry8919.github.io/my-portafolio/"> Quien Soy</a>
    </li>
    
   
</ul>

</nav>
      
    )
}

export default Nav