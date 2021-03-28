import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../CSS/Navmed.css';

import resp from "../../public/headerimg/respiratorycallnow.png"
import PElogo from "../../public/headerimg/PE Med logo PE_-4.png"
import email_logo from "../../public/headerimg/email_phone.png"
import email_phone from "../../public/headerimg/new email logo-1.png"




const Navmed = () => {
  return (
    <div>
            <ul className='bluebar'>
                    <h5>Free Shipping for Orders Over $50</h5>
                        
                        <div className="inheaderbar">                    
                            <img className='phoneicon' src={email_logo} alt="email logo" /> 
                                <a>
                                    281-558-2273
                                </a>
                                <img className="emailicon" src={email_phone} alt="phone icon" />          
                                <a>
                                    info@pemedicalsupplies.com
                                </a>                                                    
                                <a>
                                    Orders 
                                </a>         
                                <a>
                                    Returns
                                </a>
                        </div>
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
                              <div className='srchinput'>
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