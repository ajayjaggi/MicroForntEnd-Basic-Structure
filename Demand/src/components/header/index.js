import React from "react";

const Header = () => {
    console.log('inside header')
    return(
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
            Header from Demand
        </div>
    )
}



export default Header;
