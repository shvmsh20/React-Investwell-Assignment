import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';
import Comment from './Comment';
import User from "./User";
import { Link } from 'react-router-dom';

class CompDidMountAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             renderType: "posts",
             items: []
        }

    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => this.setState({
                items: res.data
            }));
    }

    delRow = (id)=>{
        let  newItems = this.state.items.filter(item=>item.id!==id);
        this.setState({
            items: newItems
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
        if(this.state.renderType!==renderValue){
            axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
            .then(res => this.setState({
                renderType: renderValue,
                items: res.data
            }));
            
        }
    }

  render() {
    return (
      <div>
        <Link to="/posts"><button className='btn' onClick={()=>this.handleUpdate("posts")}>POSTS</button></Link>
        
        <Link to="/comments"><button className='btn' onClick={()=>this.handleUpdate("comments")}>COMMENTS</button></Link> 

        <Link to="/users"><button className='btn' onClick={()=>this.handleUpdate("users")}>USERS</button></Link>
      
        <h1 className='heading'>{(this.state.renderType).toUpperCase()}</h1>

        {this.state.renderType==="posts" && <Post items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {this.state.renderType==="comments" && <Comment items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {this.state.renderType==="users" && <User items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        
        
    </div>
    )
  }
}

export default CompDidMountAxios