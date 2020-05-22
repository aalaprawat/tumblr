import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
const Header = () =>{

    return (
    <div className ="Header">
        <Link className="header_name" to="/">
        <h1 > SHOPPER</h1>
        </Link>
        <div className="option">
        <Link className="indi" to="/shop">SHOP</Link>
        <br/><br/>
        <Link to="/sign" className="indi">LOG IN</Link>
        </div>
    </div>
    )
}

export default Header;