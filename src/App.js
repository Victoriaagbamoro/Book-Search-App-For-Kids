import React from 'react'
import Navbar from './Nav-bar/Navbar'
import MainBody from './Nav-bar/MainBody'
import StudentSignUp from './Nav-bar/StudentSignUp'
import InstructorSignUp from './Nav-bar/InstructorSignUp'
import GetStarted from './Nav-bar/GetStarted'
import InstructorGetStarted from './Main-content/InstructorGetStarted'
import Footer from './components/Footer-part/Footer'
import {BrowserRouter as Router,Switch,Route,}  from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/> 
          <MainBody/>
          <Switch>
            <Route path="/studentsignup" component={StudentSignUp}/>
            <Route path="/instructorsignup" component={InstructorSignUp}/>
            <Route path="/studentsignup" component={GetStarted}/>
            <Route path="/instructorsignup" component={InstructorGetStarted}/>
          </Switch>
      
        <Footer/>
        
      </div>

    </Router>
  );
}

export default App;
