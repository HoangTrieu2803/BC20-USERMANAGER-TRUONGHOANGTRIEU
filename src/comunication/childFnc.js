import React from 'react'

export default function ChildFnc(props) {
    console.log(props);
    const {username} = props;
    return (
        <div>
            <h3>ChildFnc</h3>
            <p>Username: {username}</p>
        </div>
    )
}
