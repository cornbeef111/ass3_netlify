import React from "react";
import Pic1 from "./images//01-1-1-300x300.png";
import Pic2 from "./images/01-2-300x300.png";
import Pic3 from "./images/02-2-300x300.png";
import Pic4 from "./images/04-2-300x300.png";
import Pic5 from "./images/05-2-300x300.png";
import Pic6 from "./images/06-2-300x300.png";

function Menusection(){
    return(
        <div>
        <div className="menuTitle"> 
        <h1> Special Menu Pasta </h1>
       </div>

       <div className="menuFood">

        <div className="box">
           <img src={Pic1} alt="" /> 
            <h2> Crispy Fry Burger </h2> 
            <p> Howdy Special. A well seasoned, crispy <br/> fried chicken fillet slaughtered with a  </p>
            <p><strong> &euro;690.00 </strong> &nbsp;<strong className="p"> &euro;600.00 </strong> </p>
        </div>

        <div className="box">
           <img src={Pic2} alt="" /> 
           <h2> Fandango Burger </h2> 
           <p> Potato skin, chicken srips, toasted  <br/> mozzareta sticks served with </p>
           <p><strong> &euro;690.00 </strong> &nbsp;<strong className="p"> &euro;600.00 </strong> </p>
        </div>

        <div className="box"> 
           <img src={Pic3} alt="" /> 
           <h2> Wrangler Burger </h2> 
           <p> Blackened chicken, sauteed onion,  <br/> smothered with pepper jack and  </p>
           <p><strong> &euro;590.00 </strong> &nbsp;<strong className="p"> &euro;500.00 </strong></p> 
        </div>

        <div className="box">
           <img src={Pic4}alt="" />  
           <h2> Double Cheese Burger </h2> 
           <p> Howdy Special. A well seasoned, crispy <br/> fried chicken fillet slaughtered with a  </p>
           <p><strong> &euro;590.00 </strong> &nbsp;<strong className="p"> &euro;500.00 </strong> </p>
        </div>

        <div className="box"> 
           <img src={Pic5} alt="" />  
           <h2> Cheddar Cheese Burger </h2> 
           <p> Howdy Special. A well seasoned, crispy <br/> fried chicken fillet slaughtered with a  </p>
           <p><strong className="p"> &euro;590.00 </strong></p>
        </div>

        <div className="box">
           <img src={Pic6} alt="" /> 
           <h2> Howdy Hanburger </h2> 
           <p> Howdy Special. A well seasoned, crispy <br/> fried chicken fillet slaughtered with a  </p>
           <p><strong className="p"> &euro;290.00 </strong></p>
        </div> 
        </div>
    </div>
    )
}

export default Menusection;