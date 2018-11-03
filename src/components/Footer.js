import React from "react"
import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse  navbar-fixed-bottom">
      <div className=" container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
         

            {/* icons go here  */}
            <li activeClassName="active alignItemsCenter">
              <a
                href="https://linkedin.com/in/nmaddenling/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </li>

            <li activeClassName="active">
              <a
                href="https://github.com/Norby257"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <i className="fab fa-github fa-2x" />
              </a>
            </li>

            <li activeClassName="active">
              <a
                href="https://github.com/Norby257"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
