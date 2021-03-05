import React from 'react'
import { NavLink } from "react-router-dom";
import PersonPinIcon from '@material-ui/icons/PersonPin';

function Nav() {
    return (
        <div>
                <div className="container-fluid">
       <div className='row'>
       <div className='col-10 mx-auto'>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"  >
     Staffing-Solution
    </NavLink>
    <button className="navbar-toggler"
     type="button"
      data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
       aria-expanded="false" 
       aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home  </NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/job">Post a Job</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Findcv">Find Cv</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="manu_active" className="nav-link" to="/Product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="manu_active" className="nav-link" to="/Back">Back to Hiring</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          activeClassName="manu_active"
           className="nav-link" to="/Helpcenter"> 
           Help Center <PersonPinIcon />
           </NavLink>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
       </div>
       </div>
       </div>
     </div>
        
    )
}

export default Nav
