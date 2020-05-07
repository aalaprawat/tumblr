import React from 'react'
import Individualitem from './individual-item'

class Directory extends React.Component{

    constructor(){
        super()
        this.state={
            items:[
                {
                    id: 1,
                    title:"Summer",
                    Discount:10
                },
                {
                    id: 4,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 5,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 6,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 2,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 3,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 7,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 8,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 9,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 10,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 11,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 12,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 13,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 14,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 15,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 16,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 17,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 18,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 19,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 20,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 21,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 22,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 24,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 25,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 26,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 27,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 28,
                    title:"Spring",
                    Discount:10
                },
                {
                    id: 29,
                    title:"Rainy",
                    Discount:10
                },
                {
                    id: 30,
                    title:"Winter",
                    Discount:10
                },
                {
                    id: 40,
                    title:"Winter",
                    Discount:10
                }
            ]
        }
    }
    render()
    {return(
    <div>
        {this.state.items.map((item)=>(<Individualitem id={item.id} title={item.title} discount={item.Discount}/>))}
    </div>
    )}
}

export default Directory;