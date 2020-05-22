import React from 'react'
import SHOP_DATA from './data'
import Indi_col from './indi_col';

class Collection extends React.Component{
    constructor(props){
        super(props);
        this.state={SHOP_DATA}
    }

    render(){
        return(
        <div>
            {
            this.state.SHOP_DATA.map(({id, ...otherCollectionProps}) => (<Indi_col key={id} {...otherCollectionProps}/>))
            }
        </div>
        )
    }
}

export default Collection;