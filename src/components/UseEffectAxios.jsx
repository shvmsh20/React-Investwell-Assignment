import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function UseEffectAxios() {

  const [renderType, setRenderType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(()=>{
    console.log("UseEfect called");
    axios.get(`https://jsonplaceholder.typicode.com/${renderType}`)
    .then(res => setItems(res.data))

}, [renderType])

  return (

    <div>
        <div>
        <button className='btn' onClick={()=>setRenderType("posts")}>POSTS</button>
        <button className='btn' onClick={()=>setRenderType("comments")}>COMMENTS</button>
        <button className='btn' onClick={()=>setRenderType("users")}>USERS</button>
        </div>
        <div>
        <h1>{renderType}</h1>
            {items.map((item)=>{
                return <pre>{JSON.stringify(item)}</pre>;
            })}
        </div>
        
    </div>
    
  )
}

export default UseEffectAxios