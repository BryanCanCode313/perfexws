import React, { Component } from 'react'
import Nav from 'react-bootstrap/Navbar'

import '../CSS/HeaderMel.scss' 

import PElogo from "../../public/headerimg/PE Med logo PE_-4.png"
import shop_cart from "../../public/headerimg/shopping cart-1.png"
import resp from "../../public/headerimg/respiratorycallnow.png"



class Headermel extends Component {
    render() {

        const Navbarr = (props) => {

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
    }

        
} 

export default Headermel;