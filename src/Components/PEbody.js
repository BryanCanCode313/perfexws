import React  from 'react';

// import Cardcarobluebox from '../Components/Cardcarobluebox';
import Cardcomp from '../Components/Cardcomp';

import '../CSS/PEbody.css';
import '../CSS/Cardcomp.css';

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

                  
    const blueboxdiv = titlebox.map((titlebox) => <div key={titlebox.key} className="blueboxs"><h4>{titlebox.titleone}<span className="colorbox" style={titlebox.titletwo.length === 0 ? {display: 'none'} : {flexdirection: 'row'}}>{titlebox.titletwo}</span></h4><Cardcomp /></div>);    
                  
    return (             
              <div className="ucaro"> 
                 {blueboxdiv}  
              </div>                         
           );  
  } 


 // can I use dot-notation to access the "blueboxdiv" so i can make each one host a diff carousel?

