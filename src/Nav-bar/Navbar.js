import React from 'react'
import './Navbar.css'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    background-color: #c3ecf7;
    background-attachment: fixed;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;


    .logo{
        padding: 15px 20px; 
        
    }


`


function Navbar(){
    return(
        <div>
            <Nav>
                <div className="logo">Ikiddie</div>
                
                <Burger/>
                        
                        
                        
                        
            </Nav>
                    
            

            

        </div>
        
    )
}

export default Navbar