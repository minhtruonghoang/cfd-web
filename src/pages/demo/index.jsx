import React,{useState} from 'react';

export default function Demo({num}) {
    let[Count,setCount]=useState(
        {
            num:1
        }
    )
    function Click(){
        Count.num += 1;
        setCount({...Count})
    }
    return (
        <div style={{marginTop:100,marginBottom:100,textAlign:"center"}}>
            {Count.num} count
            <button onClick={Click} >click me</button>
            </div>
    )
}
