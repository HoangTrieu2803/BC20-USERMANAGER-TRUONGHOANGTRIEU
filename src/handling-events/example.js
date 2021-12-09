import React, { Component } from 'react'

export default class ExampleHangdingEvents extends Component {
    username ="Cybersoft"
    isLogin = false;
    handlingLogin = () =>{
        this.isLogin = true;
    }
    renderHTML(){
        return this.isLogin ? (<div>
            <h1>Hello {this.username}</h1>
            <button className="btn btn-danger">logout</button>
            </div>) : (        <div>
             <h1>Vui long login</h1>
                <button onClick={this.handlingLogin} className="btn btn-success">Login</button>
            </div>)

        // if(this.isLogin == true){
        //     return(
        //     <div>
        //     <h1>Hello {this.username}</h1>
        //     <button className="btn btn-danger">logout</button>
        //     </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //         <h1>Vui long login</h1>
        //         <button className="btn btn-success">Login</button>
        //         </div>
        //     )
        // }
       
    }
    render() {
        return (
            <div>
                <h3>ExampleHangdingEvents</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
