import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Post({items, del, sorting}) {

    return <table>
    <thead>
    <tr>
    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('id')}/></div></th>
    <th><div className='row'><span className='col'>UserID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('userId')}/></div></th>
    <th><div className='row'><span className='col'>Title</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('title')}/></div></th>  
    <th><div className='row'><span className='col'>Body</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>sorting('body')}/></div></th>  
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.userId}</td>
      <td>{item.title}</td><td>{item.body}</td>
      <td><DeleteIcon className='del-btn' onClick={()=>del(item.id)}/></td></tr>)
      })
     }
     </tbody>
     </table>
  

}
export default Post