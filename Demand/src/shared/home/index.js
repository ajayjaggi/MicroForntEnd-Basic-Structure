import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
// import './style.css'

const Home =  (props) => {
    return(
        <div>
            <Header/>
            <Link className="container" to ='/messi'>
                Welcome to Home Page
            </Link>
        </div>

    )
}

export default Home