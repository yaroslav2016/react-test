import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
           <ul className="nav text-uppercase">
               <li className="item">
                <Link className="nav-link" to="/">Users list</Link>
               </li>

               <li className="item">
                <Link className="nav-link" to="/add">Add user</Link>
               </li>

           </ul>
        );
    }
}

export default Navbar;