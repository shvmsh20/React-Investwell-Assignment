import React, {Component} from 'react';
import GreetEnglish from './GreetEnglish';
import GreetHindi from './GreetHindi';

let initailVal = Math.floor(Math.random()*101);

class CounterC extends Component{
    constructor(){
        super()
        this.state = {
            count: initailVal,
            langEng: true
        }
    }

    change = (inc)=>{
       this.setState({
        count: inc?this.state.count+1:this.state.count-1 
       })
    }

    changeLang(){
        this.setState({
            langEng: !this.state.langEng
        })
    }

    reset = ()=>{
        this.setState({
            count: initailVal 
        })
    }

    render(){
        return (
        <div>
            {this.state.langEng?
            <GreetEnglish/>:<GreetHindi/>}
            <div>
                <button className="btn" onClick={()=>this.changeLang()}>Change Language</button>
    
            </div>
            <h1>Counter: {this.state.count} </h1>
            <div>
                <button className="btn" onClick={()=>this.change(true)}>Increase</button>
                <button className="btn" onClick={()=>this.change(false)}>Decrease</button>
                <button className="btn" onClick={()=>this.reset()}>Reset</button>
            </div>
            
        </div>
        );
    }
}

export default CounterC;

