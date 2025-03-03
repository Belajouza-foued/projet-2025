import React from "react";
import { Link,Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return(
     
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Accueil</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="contact">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formation">Formation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Inscription</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true">Solutions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">Candidats</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="cours">Cours</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
        </>
    )
}
export default Navbar;