import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  constructor(props){
    super(props);
    console.log(this.props.listProduct)
  }
  renderProduct = () =>{
    const {listProduct} = this.props;
    return listProduct.map((product)=>{
      return(
        <SanPham key={product.maSP} product={product} detailProduct ={this.props.detailProduct}
        addProduct = {this.props.addProduct}
        /> 
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
         {this.renderProduct()}
        </div>
      </div>
    );
  }
}
