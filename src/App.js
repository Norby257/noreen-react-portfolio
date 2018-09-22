import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio';
import Contact from './Contact';
import BlogList from './Blog';
import {Route} from 'react-router-dom';
import Projects from './projects.json';
//  import ProjectList from './ProjectList'; 
//   import Project from './Project';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Route exact path='/' render={()=>(
           <Profile />

        )} />


        <Route exact path='/contact' render={()=>(
           <Contact />

        )} />
       <Route exact path ='/blog' render={()=> (
          <BlogList />

       )} />
      </div>
    );
  }
}

export default App;
