import React, { Component } from 'react'
import ExampleHangdingEvents from './example';
import State from '../state';
export default class HandlingEvents extends Component {
    handlingEvent(){
        console.log(123);
    }
    handlingEventParam()
    {
        
    }
    render() {
        return (
            <div>
                <h3>HandlingEvents</h3>
                <button className = "btn btn-success" onClick={this.handlingEvent}>
                    HandlingEvents
                </button>
                <button className = "btn btn-info" onClick={()=>{
                    console.log(456);
                }}>Hand</button>
                <button className = "btn btn-danger" onClick ={()=>
                {this.handlingEventParam("Cybersoft")}}
                >HandlingEvents Params</button>
                <ExampleHangdingEvents/>
                <State/>
            </div>
        )
    }
}
