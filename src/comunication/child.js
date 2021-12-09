import React, { Component } from 'react'

export default class Child extends Component {
    HandleResetInfo = () =>{
       const username = "Cybersoft";
       const age = 4;
       this.props.resetInfo(username, age);
    };
    render() {
        const {username} = this.props;
        console.log(username);
        return (
            <div>
                <h3>Child</h3>
                <p>Username: {username}</p>
                <button onClick={this.HandleResetInfo} className="btn btn-danger">Reset</button>
            </div>
        )
    }
}
