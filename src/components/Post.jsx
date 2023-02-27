import React from 'react'

function Post({items, del}) {

    return <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>UserID</th>
    <th>Title</th>
    <th>Body</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.userId}</td>
      <td>{item.title}</td><td>{item.body}</td>
      <td><button className='del-btn' onClick={()=>del(item.id)}>Delete</button></td></tr>)})
     }
     </tbody>
     </table>
  

}
export default Post