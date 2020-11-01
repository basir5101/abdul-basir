import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Navbar/About/About';
import Home from './Components/Navbar/Home/Home';
import Projects from './Components/Navbar/Projects/Projects';
import Branch from './Components/Navbar/Branches/Branch';
import Login from './Components/Navbar/Login/Login';
import Registration from './Components/Registration/Registration';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact.js/Contact';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <Router>    
      <Navbar/>            
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/blogs'>
          <Blogs/>
        </Route>
        <Route path ='/about'>
          <AboutMe/>
        </Route>
        <Route path = '/contact'>
          <Contact/>
        </Route>
        <Route path = '/projects'>
          <Projects/>
        </Route>
        <Route path = '/branches'>
          <Branch/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/registration'>
          <Registration/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
