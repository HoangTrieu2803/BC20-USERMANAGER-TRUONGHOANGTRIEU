import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "Cybersoft";
    age ="18";
    lop = "BC20";
    renderInfo(){
        return(
            <>
                <p>{this.username} - {this.age}</p>
                <p>{this.lop}</p>
            </>
        );
    }
    render() {
        return (
            <div>
                <h3>RenderingElement</h3>
                {this.renderInfo()}
            </div>
        )
    }
}
