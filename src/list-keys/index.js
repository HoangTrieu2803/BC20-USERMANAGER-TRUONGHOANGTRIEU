import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props){
        super(props);
        this.state = {
            listUser: [
                { username: "trieu" , age :"21"},
                { username: "trieu" , age :"21" }
            ]
        }
    }
    renderListUser = () =>{
        return this.state.listUser.map((user,index)=>{
            return(
                <li key={index}>
                    username : {user.username} - age: {user.age}
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <h3>ListKeys</h3>
                <ul>
                    {
                       this.renderListUser()
                    }
                </ul>
            </div>
        )
    }
}
