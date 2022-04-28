import React from 'react';


import { BrowserRouter, Routes, Link,Route, Router } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item align-center">
        <Link className="nav-link" to='/'>Login</Link>
        </li>
        <li className="nav-item">
       <Link   className="nav-link" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
       <Link  className="nav-link"  to='/about'>About</Link>
        </li>
        <li className="nav-item">
       <Link   className="nav-link" to='/listing'>List</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
      
    </div>
  );
}

export default Navbar;
