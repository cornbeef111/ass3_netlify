import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
           <nav className="nav"> 
           <Link to="/">
               <a href="www.home.com"> Home </a>
           </Link>
           <Link to="About">
               <a href="www.about.com"> About </a>
           </Link>
           <Link>
               <a href="www.shop.com"> Shop </a>
           </Link>
           <Link>
               <a href="www.order.com"> Order </a>
           </Link>
           <Link>
               <a href="www.login.com"> Login </a>
           </Link>
           <Link>
               <a href="www.register.com"> Register </a>
           </Link>
           </nav> 
    )
}

export default Nav;