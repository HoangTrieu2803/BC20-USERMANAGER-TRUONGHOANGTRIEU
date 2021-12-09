import React, { Component } from 'react'
import data from "./data.json";
export default class Example extends Component {
    constructor(props){
        super(props);
        this.state ={
            listMovie: data,
        }
    }
    renderListMovie = () =>{
        const {listMovie} =this.state
        return listMovie.map((movie)=>{
            return(
                <div className="col-md-4" key={movie.maPhim}>
                <div className="card" style={{width: '18rem'}}>
                <img src={movie.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">{movie.moTa}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
            </div>
            )
        })
    }
    render() {
        console.log(data);
        return (
            <div className="container">
                <div className="row">
                 {this.renderListMovie()}
            </div>
            </div>
        )
    }
}
