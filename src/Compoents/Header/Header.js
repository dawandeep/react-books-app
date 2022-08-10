import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
  <div className="container-fluid">
    <Link to={"/home"} className="navbar-brand fw-bold">The Book Spot</Link>
     {/* <a data-testid="brandname" classNameName="navbar-brand" href="#">Book Manager</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link fw-bold">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/add-books"} className="nav-link fw-bold">Add Books</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
