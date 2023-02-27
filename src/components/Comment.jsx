import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Comment({items, del, sorting}) {
    return <table>
    <thead>
    <tr>
    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('id')}/></div></th>
    <th><div className='row'><span className='col'>PostId</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('postId')}/></div></th>
    <th><div className='row'><span className='col'>Name</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('name')}/></div></th>
    <th><div className='row'><span className='col'>Email</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('email')}/></div></th>
    <th><div className='row'><span className='col'>Body</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('body')}/></div></th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.postId}</td><td>{item.name}</td>
      <td>{item.email}</td><td>{item.body}</td><td><DeleteIcon className='del-btn' onClick={()=>del(item.id)}/></td></tr>)})
     }
     </tbody>
     </table>
    

}
export default Comment