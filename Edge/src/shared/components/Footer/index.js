import React from "react";
import Header from "demand/Header"

const Footer = () => {
    return(
       <div>
           <div
               style={{
                   padding: "1em",
                   margin: "1em",
                   border: "1px solid black",
                   backgroundColor: "#ccc",
               }}
               onClick={() => {
                   console.log("header click")
               }}
           >
               Footer from Edge
           </div>
           <Header/>
       </div>
    )
}



export default Footer;
