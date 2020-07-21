import React from 'react'
import { Link } from 'react-router-dom'


function InstructorGetStarted(){
    return(
        <div>

            <Link to="instructorsignup">
                <button className="instruct-button">Get Started</button>
            </Link>

        </div>
    )
}

export default InstructorGetStarted