import { Component } from 'react';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';
import {Link}  from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className='NavbarItems'>
                 <h1 className='navbar-logo'> Ghumate</h1>
                 <ul className='nav-menu'>
                {MenuItems.map((item,index) =>{
                 return   (
                    <li key={index}>
                        <a className='{item.cName}'></a>
                    <a href='/'> 
                    <i className={item.icon}></i>{item.title}
                    </a>
                </li>
                 )
                })}
                </ul>

            </nav>
        )
    }
}
export default Navbar;