import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Post(props) {

    return <>
    <h1 className='heading'>POSTS</h1>
    <table>
    <thead>
    <tr>
    <th><div className='row'><span className='col'>ID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('id')}/></div></th>

    <th><div className='row'><span className='col'>UserID</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('userId')}/></div></th>

    <th><div className='row'><span className='col'>Title</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('title')}/></div></th> 

    <th><div className='row'><span className='col'>Body</span>
    <ImportExportIcon className='col sort-icon' onClick={()=>props.sorting('body')}/></div></th>  
    
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {props.items && props.items.map((item)=>{
      return (<tr key = {item.id}><td>{item.id}</td><td>{item.userId}</td>
      <td>{item.title}</td><td>{item.body}</td>
      <td><DeleteIcon className='del-btn' onClick={()=>props.del(item.id)}/></td></tr>)
      })
     }
     </tbody>
     </table>
     </>
  

}
export default Post