import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Comment(props) {
    return <>
    <h1 className='heading'>COMMENTS</h1>
    <table>
    <thead>
    <tr>

    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('id')}/></div></th>

    <th><div className='row'><span className='col'>PostId</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('postId')}/></div></th>

    <th><div className='row'><span className='col'>Name</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('name')}/></div></th>

    <th><div className='row'><span className='col'>Email</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('email')}/></div></th>

    <th><div className='row'><span className='col'>Body</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('body')}/></div></th>

    <th>Delete</th>
    
    </tr>
    </thead>
    <tbody>
    {props.items && props.items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.postId}</td><td>{item.name}</td>
      <td>{item.email}</td><td>{item.body}</td><td><DeleteIcon className='del-btn' onClick={()=>props.del(item.id)}/></td></tr>)})
     }
     </tbody>
     </table>
     </>
    

}
export default Comment