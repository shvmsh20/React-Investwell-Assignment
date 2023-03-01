import React, {useState} from 'react'
import axios from 'axios';
import Post from './Post';
import Comment from './Comment';
import User from "./User";
import { Link } from 'react-router-dom';

let renderType = "";

const CompDidMountAxios = () => {

    const [items, setItems] = useState([]);
    const delRow = (id)=>{
        setItems((prevItems)=>{
          return prevItems.filter(item=>item.id!==id)
        })  
    }

    const compareBy = (key) => {
        return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
        };
      };

    const sortBy = (key) => {
    let arrayCopy = [...items];
    arrayCopy.sort(compareBy(key));
    setItems(arrayCopy);
    };
    
    const handleUpdate = (renderValue)=>{
        //If user clicks on same button then no axios call is made
        if(renderType!==renderValue){
            axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
            .then(res => setItems(res.data));
            renderType = renderValue; 
        }
    }

 
    return (
      <>
        <Link to="/posts"><button className='btn' onClick={()=>handleUpdate("posts")}>POSTS</button></Link>
        
        <Link to="/comments"><button className='btn' onClick={()=>handleUpdate("comments")}>COMMENTS</button></Link> 

        <Link to="/users"><button className='btn' onClick={()=>handleUpdate("users")}>USERS</button></Link>
      

        {renderType==="posts" && <Post items = {items} del={delRow} sorting={sortBy}/>}
        {renderType==="comments" && <Comment items = {items} del={delRow} sorting={sortBy}/>}
        {renderType==="users" && <User items = {items} del={delRow} sorting={sortBy}/>}
        
  
    </>
    )

}

export default CompDidMountAxios