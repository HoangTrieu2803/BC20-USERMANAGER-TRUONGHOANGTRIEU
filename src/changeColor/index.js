import React, { Component } from 'react'

export default class ChangeColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        };
    }
   ChangeColor = (img) =>{
        this.setState({
            img: img,
        })
   }
    
    render() {
        const {img} = this.state;
        return (
            <div className = "container">
                <h3>ChangeColor</h3>
                <div className = "row">
                    <div className ="col-md-6">
                        <img className="img-fluid" src={img} />
                    </div>
                    <div className="col-md-6">
                        <button onClick={()=>{
                            this.ChangeColor("./img/imgRedCar.jpg")
                        }} className="btn btn-danger">Red</button>
                        <button onClick={()=>{
                            this.ChangeColor("./img/imgSilverCar.jpg")
                        }} className="btn btn-light mx-3">Silver</button>
                        <button onClick={()=>{
                            this.ChangeColor("./img/imgBlackCar.jpg")
                        }} className="btn btn-dark">Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
