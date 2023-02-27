import React from 'react'

function Comment({items}) {
    return <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>PostId</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr><td>{item.id}</td><td>{item.postId}</td><td>{item.name}</td><td>{item.email}</td><td>{item.body}</td></tr>)})
     }
     </tbody>
     </table>
    

}
export default Comment