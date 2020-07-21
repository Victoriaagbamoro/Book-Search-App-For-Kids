import React from 'react'
import './Navbar.css'
import GetStarted from './GetStarted'
import MainContent from '../Main-content/MainContent'
import Testimonies from '../components/Testimonials/Testimonies'



function MainBody(){
    return(
        <div>
            <section >
                <header className="background">
                    <section className='hero'>
                        <div className='about-mission'>
                            <div className='text'>
                                <h1 className='heading'>
                                Super</h1>
                                <h1 className='headings'>
                                Courses</h1>
                                <p>
                                Children can learn from experienced teachers, to take their skill developement to
                                the next level with real life projects which will lead to raising smart and resilent kids.
                                </p>
                                <button>Join now </button>
                            </div>
                            <div className="image-land">
                                <img className="imgbb" src="https://i.ibb.co/1vVg6C4/pngamaka.png" alt="pngamaka" border="0"></img>

                            </div>
                        </div>
                    
                    </section>

                </header>
                        
            </section>

            <section>
                <div >
                    <img className="row-one" src="https://i.ibb.co/jHXd1c9/row.png" alt="row" border="0"/>
                </div>
                <div className="row-bg">
                    <div className="display-row">
                        <div>
                            <img className="course-image" src="https://i.ibb.co/QdCM1q4/kiddie1.png" alt="kiddie1" border="0"></img>

                        </div>


                        <div>
                            <div className="bg-write">
                                <h2>Super Courses is made perfect for Kids.</h2> 
                            </div>
                            <div className="row-display">
                                <div className="bg-one">
                                    <h1>
                                        1
                                    </h1>
                                </div>
                                <div className="bg-robot">
                                    <h2>Robotics</h2>
                                    <p>The robotics class is designed to give insights into notable innovations kids can take up.</p>
                                    
                                </div>

                            </div>
                            <div className="row-display">
                                <div className="bg-two">
                                    <h1>2</h1>
                                </div>
                                <div className="bg-craft">
                                    <h2>Arts & Crafts</h2>
                                    <p>The Art and craft class is designed to ensure that kids learn to be more creative.</p>
                                </div>

                            </div>
                            <div className="row-display">
                                <div className="bg-three">
                                    <h1>3</h1>
                                </div>
                                <div className="bg-program">
                                    <h2>Computer Programming</h2>
                                    <p>Kids can learn to grow and become more creative to invent great ideas, that can change the World.</p>
                                </div>

                            </div>
                            <div className="row-display">
                                <div className="bg-four">
                                    <h1>4</h1>
                                </div>
                                <div className="bg-music">
                                    <h2>Music</h2>
                                    <p>Music is a beautiful thing, kids can have access to wide range of instrutments.</p>
                                    <div className="btn-bg">
                                        <GetStarted/>
                                    </div>
                                </div>

                            </div>
                            
                        
                        </div>
                    </div>
                
                </div>
                <div className="join-bg" >
                    
                    <img className="row-two" src="https://i.ibb.co/cQKpkzh/Untitled-2-1.png" alt="Untitled-2-1" border="0"></img>
                    
                </div>
            
                
            </section>

            <section>
                <div>
                    <MainContent/>
                </div>
            </section>

            <section>
                <div>

                    
                    <Testimonies/>
                
                </div>
            </section>

            

            

        </div>
        
    )
}

export default MainBody