import React from 'react'
import { css } from 'glamor'


const NewsItem=({item})=>{
    let styles=css({ 
          padding:'20px',       
        
           ' h3':{
               color:'red',
               backgroundColor:'white'
           },
           ' div':{
               color:'blue'
           },
           border:'1px solid green',
           margin:'5px'
        

    })
 

    return(
        <div {...styles}>
           
             <h3>{item.title}</h3>
             <div>
                 {item.feed}
             </div>
           
        </div>
    )
}

export default NewsItem;