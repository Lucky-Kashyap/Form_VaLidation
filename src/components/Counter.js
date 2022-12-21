import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    const incerement=()=>{
        setCount(count+1);
    }
    const Incremented = ()=>{
        for(let i=0;i<10;i++){
            setCount(count => count+1)
        }
    }
    // useEffect(()=>{
    //     console.log('useEffect');
    // },[])
  return (
    <div>Counter
        {count}
        <button onClick={incerement}>click {count}</button>
        <button onClick={Incremented}>Incremented by 10 - {count}</button>
        </div>
  )
}

export default Counter