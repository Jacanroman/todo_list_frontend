import React from "react";

import logo from '../images/28518.jpg';


function Header(){
    return(
        <header>
            <img src={logo} alt={"logo"} className="brand-logo"/> 
            <h1 className="header_title">TO-DO Application</h1> 
            
        </header>
    );
}


export default Header;