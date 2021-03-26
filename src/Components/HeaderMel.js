import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'


import PElogo from "../img/headerimg/PE Med logo PE_-4.png"
import shop_cart from "../img/headerimg/shopping cart-1.png"
import resp from "../img/headerimg/respiratorycallnow.png"
import email_logo from '../img/headerimg/email_phone.png'
import email_phone from '../img/headerimg/new email logo-1.png'


class Headermel extends Component {
    render() {

        const Navbarr = () => {

            return (

                <Nav>
                 
                    <div className="bluebar">    
                            <p>Free Shipping for Orders Over $50</p>
                    

                            <div className="inheaderbar">    
                                        {/* className="phoneicon" */}
                                        <img className='phoneicon' src={email_logo} alt="email logo" /> 
                                        <a>
                                            281-558-2273
                                        </a>

                                        {/* className="emailicon"  */}
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
                        </div>


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
                                    <div className="logindiv">
                                        <div> 
                                        Login
                                        </div> 
                                    </div>  
                                                
                                    <div className="price">
                                        [0/$0.00]
                                    </div>
                                                        
                                    <div>
                                        <img className="shoppingcart" src={shop_cart} alt="shopcart_icon" />
                                    </div>                                                     
                            </div>  
 
                        </div>

                        <Nav.Item as="li">
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>

                         

                </Nav> 
            );
        }


        return(
            <Navbarr />
        );
    }
}

export default Headermel