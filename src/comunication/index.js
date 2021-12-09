import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import Children from './children';
export default class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 4
        }
    }
    HandleChangeInfo = () =>{
        this.setState({
            username: "Trieu",
            age: 18,
        })
    }
    reset = (username , age) =>{
        // nhan gia tri tu con
        this.setState({
            username,
            age,
        })
    }
    render() {
        const {username,age}=this.state;
        return (
            <div>
                <h3>Communication</h3>
                <p>
                    Username: {username},
                    Age: {age}
                </p>
                <button onClick= {this.HandleChangeInfo} className = "btn btn-success">Change</button>
                <hr/>
                <Child username={username} resetInfo={this.reset} />
                <ChildFnc username={username} />
                <Children>
                    <p>Username : {username} - Age : {age}</p>
                    <div>ahihi</div>
                </Children>
            </div>
        )
    }
}