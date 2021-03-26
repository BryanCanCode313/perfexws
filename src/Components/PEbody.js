import React  from 'react';
// import { Component } from 'react';
import Cardcarobluebox from '../Components/Cardcarobluebox';
import '../CSS/Cardcarobluebox.scss';

export default function PEbody() {

  

  const titlebox = [
                    {                     
                      titleone: "Featured",
                      titletwo: "Product",  
                      key: 0
                    },
                    {                       
                      titleone: "Blog",
                      titletwo: "Posts",
                      key: 1  
                    },
                    {                       
                      titleone: "Customer",
                      titletwo: "Review" ,
                      key: 2 
                    },
                    {                    
                      titleone: "Brand",  
                      titletwo: "",
                      key: 3                      
                    } 
                   ];

                  
    const blueboxdiv = titlebox.map((titlebox) => <div key={titlebox.key} className="blueboxs"><h4>{titlebox.titleone}<span className="colorbox" style={titlebox.titletwo.length === 0 ? {display: 'none'} : {flexdirection: 'row'}}>{titlebox.titletwo}</span></h4><Cardcarobluebox /></div>);    
                  
    return (             
              <div className="ucaro"> 
                 {blueboxdiv}  
              </div>                         
           );  
  } 


 

