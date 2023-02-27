import React from 'react'

function Comment({items}) {
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
    </tr>
    </thead>
    <tbody>
    {items && items.map((item)=>
       (<tr><td>{item.id}</td><td>{item.name}</td><td>{item.username}</td>
      <td>{item.email}</td>
      {/* <td>{item.address.street}{item.address.suite}, {item.address.city} , {item.address.zipcode} </td> */}
      <td>{item.phone}</td><td>{item.website}</td>
      </tr>)
     )}
     </tbody>
     </table>


}
export default Comment