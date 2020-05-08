import React from 'react'
import './individual-item.scss'

const Individualitem = ({id,title,discount}) =>{
    return (
        <div className ="IndividualItems">
            <div className="back" style ={{backgroundImage:`url(${`https://i.picsum.photos/id/${861+id}/1200/1200.jpg`}`}}>
            </div>
            <div className="Title">
                    {title+"      "}
                    {discount + id - Math.floor(Math.random()*20)}%
            </div>
            
        </div>
    )
}

export default Individualitem