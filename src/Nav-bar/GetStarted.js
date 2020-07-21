import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function GetStarted(){
    return(
        <div>

            <Link to="studentsignup">
                <button className="bg-button">Get Started</button>
            </Link>

        </div>
    )
}

export default GetStarted