import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Bio from "./components/Bio"
import BlogList from "./containers/BlogList"
import { Route } from "react-router-dom"
import Projects from "./projects.json"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
//  import ProjectList from './containers/ProjectList';
//   import Project from './Project';
import Profile from "./components/Profile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" exact component={Profile} />
        <Route exact path="/blog" exact compoent={BlogList} />
        <Footer />
      </div>
    )
  }
}

export default App
