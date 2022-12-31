import React, {useState} from 'react';
import { GiBowlOfRice, GiNoodles} from 'react-icons/gi';  

import './Navbar.css';


const Navbar = () => {
 
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__bg app__navbar">
    <div className="app__navbar-logo"> 
      <GiNoodles color="#e6c18f" size= "3rem"/> 
    </div>
    <ul className="app__navbar-links ">
      <li> <a href="#home" >Home</a> </li>
      <li> <a href="#about" >About</a> </li>
      <li> <a href="#menu" >Menu</a> </li>
      <li> <a href="#gallery" >Gallery</a> </li>
      <li> <a href="#contact" >Contact</a> </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" >Log In / Register</a>
     <div />
    <a href="/" >Book a table</a>
    </div> 
    <div className="app__navbar-smallscreen">
       <GiBowlOfRice color="#e6c18f" size= "3rem" onClick={()=> setToggleMenu(true)} />
     {toggleMenu && (
     <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <GiBowlOfRice size= "3rem" className= "overlay__close" onClick={()=>setToggleMenu(false)} />
      <ul className="app__navbar-smallscreen_links ">
      <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
      <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
      <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
      <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
    </ul>
    </div>
    )}
    </div>
  </nav>
)
}
export default Navbar;
