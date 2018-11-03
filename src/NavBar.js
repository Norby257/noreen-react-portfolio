import React from 'react'
import {NavLink} from 'react-router-dom'
import Contact from './Contact'
const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse">
        <div className=" container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
   

          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><NavLink to='/' exact activeClassName='active'>Applications Built 
              </NavLink> 
              <span className="sr-only">(current)
              </span>
             
              </li>
              <li>
                <NavLink to='/new' activeClassName='active'>
                Fraud Prevention blog 
                </NavLink>
              </li>

              <li>
                <NavLink to='/contact' activeClassName='active'>
                Contact Me
                </NavLink>
              </li>
              
           
            </ul>
            
           
          </div>
        </div>
      </nav>

    )
}


export default NavBar;