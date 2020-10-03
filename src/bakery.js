import React from 'react'

function Bakery(props){
    return(
      <div>  
          <h1> We are serving today in savoury {props.DishName}</h1> 
          <h1> We are serving today in Sweet {props.sweet}</h1> 

      </div>
    )
}
export default Bakery;