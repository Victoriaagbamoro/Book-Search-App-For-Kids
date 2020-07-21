import React, { useState } from 'react'
import './Quote.css'
import {css} from 'emotion'


export default function Quotes(){
    const quotes = {
        0: {
            client: "Mrs, Tacha Cobbs",
            quote: "The Ikiddie Educational App has been a great help to my kids, they went from understanding nothing in robotics to building great robots."
        },

        1: {
            client: "Mr, Clinto Harrison",
            quote: "This app has been a great way to help my kids stay focused when back from home, whereby they can have access to a wide range of courses, that will help them be all they were created for."
        },

        2: {
            client: "Miss Hunga Chidinma",
            quote: "As a school teacher, this app is a great way to help my school students during their recreational activities. The courses are fully packed to help kids learn"
        },

        3: {
            client: "John Amadi",
            quote: "Every child should have access to this platform because of the great opportunities it brings. My niece loves the music class, it makes her happy."
        }

    }

    const [current, setCurrent] = useState(quotes[0])
    const [active, setActive]  = useState(0)

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }
    return(
        <div>
            <section className="bg-quote">
                <div className="testify-text">
                    <h2>Our Testimonies</h2>
                </div>
                <div className={css `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 40px auto;
                    max-width: 700px;
                    height: 50vh;
                    background-color: #ffffffe7;
                    
                    p{
                        margin-bottom: 20px;
                        font-size: 18px;
                        color: #1b3b6f;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        text-align: center;
                    }
                    
                `}>
                    <p>{current.quote}</p>
                    <p>{current.client}</p>
                    <div className={css`
                        display: flex;

                        span{
                            height: 20px;
                            width: 20px;
                            margin: 0 3px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer
                        }

                        span::before{
                            content: "";
                            height: 6px;
                            width: 6px;
                            background-color: #d4d4d4;
                            border-radius: 50%;
                            transition: background-color 0.3s ease;
                        }

                        span:hover::before{
                            background-color: #ffbe0b;
                        }

                        span[data-quote="${active}"]::before{
                            background-color: #ffbe0b;
                        }
                    
                    `

                    }>
                        {Object.keys(quotes).map(index =>(
                            <span
                                onClick={event => handleSetClick(event)}
                                data-quote={index}
                                key={index}
                            />
                        ))}
                    </div>

                </div>
            </section>

        </div>
    )
}