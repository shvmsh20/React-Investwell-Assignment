import React, {useState} from 'react';
import GreetEnglish from './GreetEnglish';
import GreetHindi from './GreetHindi';

const CounterF = ()=>{
   const [count, setCount] = useState(0);

   const [langEng, setLangEng] = useState(false);

    function increase(){
    setCount((prev)=>{
        return prev = prev+1;
    });
    }

    function decrease(){
    setCount((prev)=>{
        if(prev===0){
            return 0;
        }
        return prev-=1;
    });
    }
    
    function changeLang(){
        setLangEng((prev)=> !prev)
    }
  
    return (
        <div>
            {langEng?<GreetEnglish/>:<GreetHindi/>}
            <div>
                <button className="btn" onClick={changeLang}>Change Language</button>
    
            </div>
            <h1>Counter: {count}</h1>
            <div>
                <button className="btn" onClick={increase}>Increment</button>
                <button className="btn" onClick={decrease}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterF;