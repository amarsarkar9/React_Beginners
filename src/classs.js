import React ,{useState} from 'react';

function Incre(){

    const [count,func]=useState(0);
    

 function increm(){
    func((count)=>count+1)
 }
 function decrement(){
    func((count)=>count-1)
 }
 function reset(){
    func((count)=>0)
 }
//  function decrement(){
//     useState(count,dec=()=>{
//             count=count-1;
//     });
//  }
//  function reset(){
//     useState(count,dec=()=>{
//             count=0;
//     });
//  }
 

    return(
        <>
                {count}
            <button onClick={increm}>Increment</button>
            <button onClick={decrement}>Dercrement</button>
            <button onClick={reset}>Reset</button>
        
        </>
    )
}
export default Incre;