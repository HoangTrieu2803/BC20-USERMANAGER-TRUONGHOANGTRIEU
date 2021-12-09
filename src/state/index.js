import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state ={
        username :"Cybersoft",
        isLogin : false,
        };
    }
    
    handlingLogin = () =>{
        this.setState({
            isLogin:true,
        });
    }
    handlingLogout = () =>{
        this.setState({
            isLogin:false,
        });
    }
    renderHTML(){
        return this.state.isLogin ? (<div>
            <h1>Hello {this.state.username}</h1>
            <button onClick = {this.handlingLogout} className="btn btn-danger">logout</button>
            </div>) : (        <div>
             <h1>Vui long login</h1>
                <button onClick={this.handlingLogin} className="btn btn-success">Login</button>
            </div>)
    }
    render() {
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
