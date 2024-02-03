import React from 'react'
import logo from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Orderlist', path: '/orderlist' },
    { name: 'Orderdetail', path: '/orderdetail' },
    { name: 'Customer', path: '/customer' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Foods', path: '/foods' },
    { name: 'Food Details', path: '/fooddetails' },
    { name: 'Customer Details', path: '/customerdetails' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Chat', path: '/chat' },
    { name: 'Wallet', path: '/wallet' },
    
  ];
const Navbar = () => {
   
    return (
        <div  className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'style={{}}>
                    <img src={logo} alt="" />
                    <nav>
      <ul style={{listStyleType:"none"}}>
        {links.map(({ name, path }) => (
          <li style={{margin:"10px",marginLeft:"-20px"}} key={path}>
            <Link style={{textDecoration:"none"}} to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar