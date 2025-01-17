import { useState, useEffect } from "react";

function UseState(){
    const [inputValue, newValue]=useState("Shubham");
    const changeValue=(event)=>{
        const newVal=event.target.value;
        newValue(newVal)
    }
    const [counter, setCounter]=useState(0);
    const [counter1, setCounter1]=useState(10);
    const Increment=()=>{

        setCounter(counter+1)
    }
    const Decrement=()=>{
        if(counter1>0){
            setCounter1(counter1-1)
        }
    }
    useEffect(()=>{
        console.log("Shubham Bhardwaj")
    }, [counter],[counter1]);
    return(
        <>
        <div>
            <h1>{inputValue}</h1>
            <input type="text" value={inputValue} placeholder="Type something" onChange={changeValue}/>
        </div>
        <div>
            <button onClick={Increment}>Increment {counter}</button>
            <button onClick={Decrement}>Decrement {counter1}</button>
        </div>
        </>
    )
}


export default UseState;