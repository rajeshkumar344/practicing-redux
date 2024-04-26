import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store/Store'
import { useSelector } from 'react-redux'


export default function Header() {
  const cartItem = useSelector(state=>state.cart)
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand font-bold" href="#">Online store</a>
    <div className=" navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home page</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item " >
          <a className="nav-link " href="#"  aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <li className="nav-item d-flex mr-5" >
          <Link to="/view"  className="nav-link "  aria-disabled="true">View Cart-{cartItem.length} </Link>
        </li>
      
     
    </div>
  </div>
</nav>
        </div>



    </div>
  )
}
