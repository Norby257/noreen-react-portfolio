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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path='/' render={()=>(
           <Bio />

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
