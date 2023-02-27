import React from 'react'

function Comment({items, del}) {
    return <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Uername</th>
    <th>Email</th>
    {/* <th>Address</th> */}
    <th>Phone</th>
    <th>Website</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items && items.map((item)=>
       (<tr key = {item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.username}</td>
      <td>{item.email}</td>
      {/* <td>{item.address.street}{item.address.suite}, {item.address.city} , {item.address.zipcode} </td> */}
      <td>{item.phone}</td><td>{item.website}</td><td><button className='del-btn' onClick={()=>del(item.id)}>Delete</button></td>
      </tr>)
     )}
     </tbody>
     </table>


}
export default Comment