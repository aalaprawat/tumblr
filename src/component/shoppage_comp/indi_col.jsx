import React from 'react'
import Indi_item from './indi_item'

const Indi_col=({id,title,items})=>{
    return (<div>
        <div>
            {id}
            <h2>{title}</h2>
        </div>
        <div>
            {
            items.filter((item,idx)=>idx<4)
            .map
            (({id,...otherCollectionProps}) => <Indi_item key={id} {...otherCollectionProps}/>)
            }
        </div>
    </div>)
}
export default Indi_col;