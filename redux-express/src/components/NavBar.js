import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {

    render() {
        return(
            <ul className='nav-bar'>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Store Main</Link>
                </li>
                <li className="nav-item">
                    <Link to="/frozen" className="nav-link">Frozen Dept</Link>
                </li>
                <li className="nav-item">
                    <Link to="/meat" className="nav-link">Meat Dept</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dairy" className="nav-link" >Dairy Dept</Link>
                </li>
            </ul>
        )
    }
}

export default NavBar;