import React from 'react'
import { Link } from 'react-router-dom'

// import './style.css'

const Home =  (props) => {
    return(
        <Link className="container" to ='/messi'>
            Welcome to Home Page
        </Link>
    )
}

export default Home