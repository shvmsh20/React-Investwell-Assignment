import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';
import Comment from './Comment';
import User from "./User";
import { Link } from 'react-router-dom';

let renderType = "";
class CompDidMountAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }

    }

   

    delRow = (id)=>{
        this.setState({
            items: this.state.items.filter(item=>item.id!==id)
        })   
    }

    compareBy = (key) => {
        return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
        };
      };

    sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({items: arrayCopy});
    };
    
    handleUpdate = (renderValue)=>{
        //If user clicks on same button then no axios call is made
        if(renderType!==renderValue){
            axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
            .then(res => this.setState({
                items: res.data
            }));
            renderType = renderValue;
            
        }
    }

  render() {
    return (
      <>
        <Link to="/posts"><button className='btn' onClick={()=>this.handleUpdate("posts")}>POSTS</button></Link>
        
        <Link to="/comments"><button className='btn' onClick={()=>this.handleUpdate("comments")}>COMMENTS</button></Link> 

        <Link to="/users"><button className='btn' onClick={()=>this.handleUpdate("users")}>USERS</button></Link>
      

        {renderType==="posts" && <Post items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {renderType==="comments" && <Comment items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {renderType==="users" && <User items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        
        
    </>
    )
  }
}

export default CompDidMountAxios