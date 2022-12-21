import React, { useEffect, useState } from 'react'

function Fretrieve() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    useEffect((e)=>{
        console.log('use Effect');
        window.addEventListener('mousemove',logMousePosition);
    },[])

    const logMousePosition = (e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

  return (
    <div>Fretrieve
    <p>{x}</p>
    <p>{y}</p>
    </div>
  )
}

export default Fretrieve