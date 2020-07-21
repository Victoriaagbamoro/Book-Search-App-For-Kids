import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;


    li{
        padding:7px 20px;
        font-size: 21px;
        margin: 15px;
        background-attachment: fixed;
    
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #ffbe0b;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

    }

    li{
        color: #0077b6;
        font-weight: bold;
        
    }

    li:hover{
        color: #ffbe0b;
        transition: .5s;
    }

    li.active1{
        border: 1px solid #057df5;
        border-radius: 10px;
        
    
    }
    
    li.active2{
        border: 1px solid #ffbe0b;
        background-color: #ffbe0b;
        border-radius: 10px;
    }
    
    li.active1:hover{
        background-color: #0077b6;
        color: #ffbe0b;
    }
    li.active2:hover{
        background-color:#0077b6 ;
        color: #ffbe0b;
        border: 1px solid #057df5;
    }
`

function RightNav({ open }){
    return(
        <Ul open={open}>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link  to="/studentsignup">
                <li className="active1">Student SignUp</li>
            </Link>
            <Link to="/instructorsignup">
                <li className="active2">Instructor SignUp</li>
            </Link>
    
        </Ul>
    )
}

export default RightNav