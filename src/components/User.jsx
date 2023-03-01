import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Comment(props) {
    return <>
    <h1 className='heading'>USERS</h1>
    <table>
    <thead>
    <tr>
    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('id')}/></div></th>

    <th><div className='row'><span className='col'>Name</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('name')}/></div></th>

    <th><div className='row'><span className='col'>Username</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('username')}/></div></th>

    <th><div className='row'><span className='col'>Email</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('email')}/></div></th>

    <th><div className='row'><span className='col'>Address</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('address[street')}/></div></th>

    <th><div className='row'><span className='col'>Phone</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('phone')}/></div></th>

    <th><div className='row'><span className='col'>Website</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('website')}/></div></th>

    <th>Delete</th>
    
    </tr>
    </thead>
    <tbody>
    {props.items && props.items.map((item)=>
       (<tr key = {item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.address["street"]}, {item.address["suite"]}, {item.address["city"]} , {item.address["zipcode"]} </td>
      <td>{item.phone}</td><td>{item.website}</td><td><DeleteIcon className='del-btn' onClick={()=>props.del(item.id)}/></td>
      </tr>)
     )}
     </tbody>
     </table>
     </>


}
export default Comment