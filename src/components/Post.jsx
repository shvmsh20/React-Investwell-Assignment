import React from 'react'

function Post({items}) {
    return <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>UserID</th>
    <th>Title</th>
    <th>Body</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr><td>{item.id}</td><td>{item.userId}</td><td>{item.title}</td><td>{item.body}</td></tr>)})
     }
     </tbody>
     </table>
  

}
export default Post