import React from "react";
import Pic1  from "./images/logo.png"
import Pic2 from "./images/01-2-300x300.png"
import Pic3 from "./images/06-2-300x300.png"

function Footer(){
    return(
        <section>
        <footer>
      <div className="footlogo">
        <img src={Pic1} alt="" />
        <p> One is to focus on the quality of your meat if you <br/> can call out organic beef, sustainable </p>
        <p> <bold>Phone:</bold> +234 8100-846-998 <br/> <br/>
           <a href="mailto:www.emeka.com"> <bold> Email: </bold> &nbsp;restaurant@gmail.com </a> </p>
           <p> <i className="fa-brands fa-square-facebook" width></i> &nbsp; <i className="fa-brands fa-square-twitter"></i> &nbsp; <i className="fa-brands fa-linkedin"></i> &nbsp;<i className="fa-brands fa-google-plus-g"></i> &nbsp; <i className="fa-brands fa-youtube"></i> </p>
      </div>

      <div className="move1">
        <h2> Our Service</h2>
        <p>Blog</p>
        <p>Home  1</p>
        <p>Home  2</p>
        <p>Main Home </p>
      </div>

      <div>
       <h2> Latest News</h2> 
       <div className="boxx">
         <img src={Pic2} alt="" />
       </div>
       <div className="boxx">
         <img src={Pic3} alt="" />
       </div>

      </div>

      <div>
        <h2> Useful Links</h2>
        <p> All Vendors </p>
        <p> Home 1 </p>
        <p> Home 2 </p>
        <p> Home 3 </p>
        <p> Pricing Plan </p>
      </div>
    
    </footer>

    <p className="center"> Copyright 2022 &copy; Theme Created By AsEdeyHot All Rights Reserved </p>
    </section>

    )
}

export default Footer;