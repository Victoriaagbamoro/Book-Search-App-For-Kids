import React from 'react'
import InstructorGetStarted from './InstructorGetStarted'
import './MainContent.css'



function MainContent(){
    return(
        <div className="main-bg">
            <section className="instructors">
                <div className="instructors-bg">
                    <h2>Our Instructors</h2>
                    <p>Become an instructor today to teach kids how to aim higher and do better.</p>
                </div>

            </section>
            <section className="main-part">
                <div className="main-display">
                    <div>
                        <h3>Learn From Finest Teachers</h3>
                        <p>As a teacher you are required to stay connected to wide range of materials
                            to keep our students informed and connected. Because we believe in core values and principles.
                        </p>

                    </div>
                    <div className="instruct-sec">
                        <img className="instruct-image" src="https://i.ibb.co/SXPBpBt/main1.png" alt="main1" border="0"/>
                    </div>
                </div>
                
                <div className="main-display">
                    <div>
                        <img className="instruct-image" src="https://i.ibb.co/DC2yp6d/teach.png" alt="teach" border="0"/>
                    </div>
                    <div className="instruct-sec">
                        <h3>Precise Content</h3>
                        <p>As a teacher you are required to stay connected to wide range of materials
                            to keep our students informed and connected.Because we believe in core values and principles.
                        </p>
                    </div>
                </div>

                <div className="main-display">
                    <div>
                        <h3>Periodic Evaluation</h3>
                        <p>As a teacher you are required to stay connected to wide range of materials
                            to keep our students informed and connected.Because we believe in core values and principles.
                        </p>

                    </div>
                    <div className="instruct-sec">
                        <img className="instruct-image" src="https://i.ibb.co/kxKtJBs/teams5.png" alt="teams5" border="0"/>
                    </div>
                </div>


                <div className="main-display">
                    <div>
                        <img className="instruct-image" src="https://i.ibb.co/xqSLTQT/teach2.png" alt="teach2" border="0"/>
                    </div>
                    <div className="instruct-sec">
                        <h3>Create Vast Online Resources</h3>
                        <p>As a teacher you are required to stay connected to wide range of materials
                            to keep our students informed and connected.Because we believe in core values and principles.
                        </p>
                    </div>
                </div>
                
            

            </section>

            <section className="instruct-bg">
                <InstructorGetStarted/>
            </section>

        </div> 
    )
}


export default MainContent