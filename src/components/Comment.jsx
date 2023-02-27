import React from 'react'

function Comment({items, del}) {
    return <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>PostId</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.postId}</td><td>{item.name}</td>
      <td>{item.email}</td><td>{item.body}</td><td><button className='del-btn' onClick={()=>del(item.id)}>Delete</button></td></tr>)})
     }
     </tbody>
     </table>
    

}
export default Comment