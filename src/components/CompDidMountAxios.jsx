import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';
import Comment from './Comment';
import User from "./User";

class CompDidMountAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             renderType: "posts",
             items: []
        }

    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
            .then(res => this.setState({
                items: res.data
            }));
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.renderType!==this.state.renderType){
            axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
            .then(res => this.setState({
                items: res.data
            }));
        }
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

  render() {
    return (
      <div>
        <button className='btn' onClick={()=>this.setState({renderType:"posts"})}>POSTS</button>
        <button className='btn' onClick={()=>this.setState({renderType:"comments"})}>COMMENTS</button>
        <button className='btn' onClick={()=>this.setState({renderType:"users"})}>USERS</button>
      
        <h1 className='heading'>{(this.state.renderType).toUpperCase()}</h1>

        {this.state.renderType==="posts" && <Post items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {this.state.renderType==="comments" && <Comment items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        {this.state.renderType==="users" && <User items = {this.state.items} del={this.delRow} sorting={this.sortBy}/>}
        
        
    </div>
    )
  }
}

export default CompDidMountAxios