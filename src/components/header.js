import React from 'react';


//componets
import '../css/style.css'

const Header =(props)=>{
    
    return (
        <header>           
        <div className='logo'>Logo</div>
        <input type="text" onChange={props.keyword}/>
         </header>)

}
 
      
    
     
       
   
   


export default Header;