import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
            <NavLink to={`/`} className='navbar-brand'>Project</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id='menu'>
            <ul className="navbar-nav">
                <li className="nav-item text-danger">
        
                    <NavLink to={`/home`} className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/about`} className='nav-link'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/headtail`} className='nav-link' >Head and Tail Page</NavLink>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Menu