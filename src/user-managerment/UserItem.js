import React, { Component } from "react";

class UserItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {user} = this.props
    return (
      <tr key={user.id}>
      <td>{user.fullname}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phonenumber}</td>
      <td>{user.type}</td>
      <td>
        <button
          className="btn btn-info mr-2"
          data-toggle="modal"
          data-target="#modelIdUser"
        >
          Edit
        </button>
        <button onClick={()=>{
          this.props.deleteUser(user);
        }} className="btn btn-danger">Delete</button>
      </td>
    </tr>
    );
  }
}

export default UserItem;
