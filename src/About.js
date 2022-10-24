import React from "react";
import pic from "./images/01-1-1-300x300.png";

function About(){
    return(
        <section>
        <div className="menuTitle"> 
     <h1> Special Menu Pasta </h1>
    </div>

    <section className="menuu">

     <div className="box">
        <img src={pic} alt="" /> 
         <h2> Crispy Fry Burger </h2> 
         <p> Howdy Special. A well seasoned, crispy <br/> fried chicken fillet slaughtered with a  </p>
         <p><strong> &euro;690.00 </strong> &nbsp;<strong className="p"> &euro;600.00 </strong> </p>
     </div>
     <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
     </section>

  </section>
    )
}

export default About;