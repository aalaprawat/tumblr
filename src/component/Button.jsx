import React from 'react'

 const Button=({type,handleChange},...otherProps)=>{
    return(
        <input type={type} onClick={handleChange}/>
    )
} 
export default Button