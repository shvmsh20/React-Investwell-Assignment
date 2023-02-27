import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Comment({items, del, sorting}) {
    return <table>
    <thead>
    <tr>
    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('id')}/></div></th>
    <th><div className='row'><span className='col'>Name</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('name')}/></div></th>
    <th><div className='row'><span className='col'>Username</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('username')}/></div></th>
    <th><div className='row'><span className='col'>Email</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('email')}/></div></th>
    {/* <th>Address</th> */}
    <th><div className='row'><span className='col'>Phone</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('phone')}/></div></th>
    <th><div className='row'><span className='col'>Website</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('website')}/></div></th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items && items.map((item)=>
       (<tr key = {item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.username}</td>
      <td>{item.email}</td>
      {/* <td>{item.address["street"]}{item.address["suite"]}, {item.address["city"]} , {item.address["zipcode"]} </td> */}
      <td>{item.phone}</td><td>{item.website}</td><td><DeleteIcon className='del-btn' onClick={()=>del(item.id)}/></td>
      </tr>)
     )}
     </tbody>
     </table>


}
export default Comment