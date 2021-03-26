import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../CSS/Navmed.css';

import resp from "../../public/headerimg/respiratorycallnow.png"
import PElogo from "../../public/headerimg/PE Med logo PE_-4.png"
// import shop_cart from "../img/headerimg/shopping cart-1.png"
// import email_logo from '../img/headerimg/email_phone.png'
// import email_phone from '../img/headerimg/new email logo-1.png'




const Navmed = (props) => {
  return (
    <div>
        
            <ul className='bluebar'>
                    <h5>Free Shipping for Orders Over $50</h5>
            </ul>  
                <div className='secdiv'>
                        <div className='firstbox'>
                                <div className='respmask'>
                                    <img src={resp} alt='resp' />
                                </div>

                                <div className='logodiv'>
                                    <img className="pelogo"src={PElogo} alt="pelogo"/>
                                </div>
                        </div>

                        <div className="middbox">
                              <div className='searchinput'>
                                    <input type='text'/>
                              </div>
                        </div>

                        <div className="lastbox">
                        </div>

                </div>
            <Nav>
                    <NavItem>
                        <NavLink href="#">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sales Items</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Manufacturers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>        
            </Nav>
      
    </div>
  );
}

export default Navmed;