import React, { Component } from "react";

export default class Modal extends Component {
  renderProduct = () =>{
    return this.props.listCart.map((product)=>{
      return(
        <tr key={product.maSP}>
        <td>{product.maSP}</td>
        <td>{product.tenSP}</td>
        <td>
          <img src={product.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button onClick ={()=>{
            this.props.listUpdateQuantity(product, false);
          }}>-</button>{product.soLuong}<button onClick={()=>{
            this.props.listUpdateQuantity(product, true);
          }}>+</button>
        </td>
        <td>{product.donGia}</td>
        <td>{product.donGia * product.soLuong}</td>
        <td>
          <button onClick={()=>{
            this.props.deleteCart(product);
          }} className="btn btn-danger">Delete</button>
        </td>
      </tr>
      )
    })
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                {this.renderProduct()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
