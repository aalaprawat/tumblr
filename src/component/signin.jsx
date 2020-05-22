import React from 'react'
import { Component } from 'react';
import Button from './Button';

class Signin extends Component{

    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    submission=(event)=>{
        console.log(this.state)
        event.preventDefault()
    }

    handlechange=(event)=>{
        const {value,name} =event.target
        this.setState({[name]:value})
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submission}>
                    <label >Email</label>
                    <input value={this.state.email} name="email" onChange={this.handlechange} required/>
                    <label >Password</label>
                    <input value={this.state.password} name ="password" type="password" onChange={this.handlechange} required/>
                    <Button type="submit" value="Submit" handleChange={this.submission} />
                </form>
            </div>
        )
    }
}

export default Signin
